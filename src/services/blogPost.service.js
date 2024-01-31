const { BlogPost, User, Category } = require('../models');
const { validateUpdatePost } = require('./validations');
const createNewPost = require('./createNewPost');

const getAll = async (email) => {
  const user = await User.findOne({ where: { email } });
  const posts = await BlogPost.findAll({ 
    where: { userId: user.id }, 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, 
        as: 'categories', 
        attributes: { exclude: ['PostCategory'] }, 
        through: { attributes: [] } }] });
  return { status: 'SUCCESSFUL', data: posts };
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, 
        as: 'categories', 
        attributes: { exclude: ['PostCategory'] }, 
        through: { attributes: [] } }] });
  if (!post) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };

  return { status: 'SUCCESSFUL', data: post };
};
const update = async (postData, id, email) => {
  const error = validateUpdatePost(postData);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };
  const user = await User.findOne({ where: { email } });
  const blogPost = await BlogPost.findOne({ where: { id, userId: user.id } });
  if (!blogPost) return { status: 'UNAUTHORIZED', data: { message: 'Unauthorized user' } };
  await BlogPost.update(postData, { where: { id } });
  const updatedPost = await getById(id);
  return { status: updatedPost.status, data: updatedPost.data };
};

module.exports = { createNewPost, getAll, getById, update };
