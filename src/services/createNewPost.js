const Sequelize = require('sequelize');
const config = require('../config/config');
const { validateBlogPost, validateCategories } = require('./validations');
const { associateCategoryWithPost } = require('../utils');
const { BlogPost, User } = require('../models');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const createNewPost = async (postData) => {
  const error = validateBlogPost(postData);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };
  const result = await sequelize.transaction(async (t) => {
    try { 
      await validateCategories(postData.categoryIds);
    } catch (err) { 
      throw new Error(err.message);
    }
    const user = await User.findOne({ where: { email: postData.email } });
    const post = await BlogPost.create({ ...postData, userId: user.id }, { transaction: t });
    await associateCategoryWithPost(post.id, postData.categoryIds, { transaction: t });
    return post;
  });
  return { status: 'CREATED', data: result };
};

module.exports = createNewPost;