const { addNewLoginSchema, addCreateNewUserSchema, addNewCategorySchema } = require('./schemas');

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

module.exports = {
  validateNewLogin,
  validateCreateNewUser,
  validateCategory,
};