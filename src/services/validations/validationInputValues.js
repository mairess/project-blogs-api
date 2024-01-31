const { 
  addNewLoginSchema, 
  addCreateNewUserSchema, 
  addNewCategorySchema,
  addNewPostSchema, 
  addNewUpdatePostSchema,
} = require('./schemas');

const validateNewLogin = (keysObjectToValidate) => {
  const { error } = addNewLoginSchema.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const validateCreateNewUser = (keysObjectToValidate) => {
  const { error } = addCreateNewUserSchema.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const validateCategory = (keysObjectToValidate) => {
  const { error } = addNewCategorySchema.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const validateBlogPost = (keysObjectToValidate) => {
  const { error } = addNewPostSchema.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

const validateUpdatePost = (keysObjectToValidate) => {
  const { error } = addNewUpdatePostSchema.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

module.exports = {
  validateNewLogin,
  validateCreateNewUser,
  validateCategory,
  validateBlogPost,
  validateUpdatePost,
};