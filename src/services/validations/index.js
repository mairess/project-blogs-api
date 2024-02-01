const validateCategories = require('./validateCategories');
const {
  validateLogin,
  validateNewUser,
  validateCategory,
  validateBlogPost,
  validateUpdatePost,
} = require('./validationInputValues');

module.exports = {
  validateCategories,
  validateLogin,
  validateNewUser,
  validateCategory,
  validateBlogPost,
  validateUpdatePost,
};