const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const config = require('../config/config');
const { validateCategories, validateBlogPost, 
  associateCategoryWithPost } = require('./validations');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const createNewPost = async ({ title, content, categoryIds, email }) => {
  const error = validateBlogPost({ title, content, categoryIds, email });
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };
  const result = await sequelize.transaction(async (t) => {
    try { 
      await validateCategories(categoryIds);
    } catch (err) { 
      throw new Error(err.message);
    }
    const user = await User.findOne({ where: { email } });
    const post = await BlogPost
      .create({ title, content, categoryIds, email, userId: user.id }, { transaction: t });
    await associateCategoryWithPost(post.id, categoryIds, { transaction: t });
    return post;
  });
  return { status: 'CREATED', data: result };
};

const getAll = async (email) => {
  const user = await User.findOne({ where: { email } });
  const posts = await BlogPost.findAll({ 
    where: { userId: user.id }, 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { 
        model: Category, 
        as: 'categories', 
        attributes: { exclude: ['PostCategory'] }, 
        through: { attributes: [] } },
    ],
  });
  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = { createNewPost, getAll };
