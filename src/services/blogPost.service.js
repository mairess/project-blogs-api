const { BlogPost, User, Category, PostCategory } = require('../models');
const schema = require('./validations/validationInputValues');

const createNewPost = async (blogPost) => {
  const error = schema.validateBlogPost(blogPost);
  const { title, content, categoryIds, email } = blogPost;
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };
  try {
    const arrayOfPromises = categoryIds.map(async (id) => {
      const category = await Category.findByPk(id);
      if (!category) throw new Error('one or more "categoryIds" not found');
    });
    await Promise.all(arrayOfPromises);
  } catch (err) { return { status: 'BAD_REQUEST', data: { message: err.message } }; }
  const theUser = await User.findOne({ where: { email: blogPost.email } });
  const thePost = await BlogPost.create({ title, content, categoryIds, email, userId: theUser.id });
  await PostCategory.bulkCreate([
    { postId: thePost.id, categoryId: 1 },
    { postId: thePost.id, categoryId: 2 },
  ]);
  
  return { status: 'CREATED', data: thePost };
};

module.exports = {
  createNewPost,
};
