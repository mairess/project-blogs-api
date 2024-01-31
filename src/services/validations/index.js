const validateCategories = require('./validateCategories');
const associateCategoryWithPost = require('./associateCategory');
const {
  validateNewLogin,
  validateCreateNewUser,
  validateCategory,
  validateBlogPost,
  validateUpdatePost,
} = require('./validationInputValues');

module.exports = {
  validateCategories,
  validateNewLogin,
  validateCreateNewUser,
  validateCategory,
  validateBlogPost,
  associateCategoryWithPost,
  validateUpdatePost,
};