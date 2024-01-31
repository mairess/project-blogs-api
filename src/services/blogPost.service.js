const Sequelize = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../models');
const schema = require('./validations/validationInputValues');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const validateCategories = async (categoryIds) => {
  const arrayOfPromises = categoryIds.map(async (id) => {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new Error('one or more "categoryIds" not found');
    }
  });
  await Promise.all(arrayOfPromises);
};

const associateCategoryWithPost = async (postId, categoryIds, transaction) => {
  const arrayOfPostCategory = categoryIds.map((categoryId) => ({ postId, categoryId }));
  await PostCategory.bulkCreate(arrayOfPostCategory, transaction);
};

const createNewPost = async ({ title, content, categoryIds, email }) => {
  const error = schema.validateBlogPost({ title, content, categoryIds, email });
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

module.exports = {
  createNewPost,
};
