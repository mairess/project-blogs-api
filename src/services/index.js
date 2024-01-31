const userService = require('./user.service');
const categoryService = require('./category.service');
const blogPostService = require('./blogPost.service');
const createNewPost = require('./createNewPost');

module.exports = {
  userService,
  categoryService,
  blogPostService,
  createNewPost,
};