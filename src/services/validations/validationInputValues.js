const { addNewLoginSchema } = require('./schemas');

const validateNewLogin = (keysObjectToValidate) => {
  const { error } = addNewLoginSchema.validate(keysObjectToValidate);

  if (error) return { status: 'BAD_REQUEST', message: error.message };
};

module.exports = {
  validateNewLogin,
};