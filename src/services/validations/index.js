const validateCategories = require('./validateCategories');
const associateCategoryWithPost = require('./associateCategory');
const {
  validateNewLogin,
  validateCreateNewUser,
  validateCategory,
  validateBlogPost,
} = require('./validationInputValues');

module.exports = {
  validateCategories,
  validateNewLogin,
  validateCreateNewUser,
  validateCategory,
  validateBlogPost,
  associateCategoryWithPost,
};