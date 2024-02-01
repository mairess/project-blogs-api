const { 
  schemaLogin,
  schemaNewUser,
  schemaCategory,
  schemaNewPost,
  schemaUpdatePost,
} = require('./schemas');

const validateLogin = (keysObjectToValidate) => {
  const { error } = schemaLogin.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const validateNewUser = (keysObjectToValidate) => {
  const { error } = schemaNewUser.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const validateCategory = (keysObjectToValidate) => {
  const { error } = schemaCategory.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const validateBlogPost = (keysObjectToValidate) => {
  const { error } = schemaNewPost.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const validateUpdatePost = (keysObjectToValidate) => {
  const { error } = schemaUpdatePost.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

module.exports = {
  validateLogin,
  validateNewUser,
  validateCategory,
  validateBlogPost,
  validateUpdatePost,
};