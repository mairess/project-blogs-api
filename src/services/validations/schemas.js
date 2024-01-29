const Joi = require('joi');

const errorMessage = 'Some required fields are missing';

const addNewLoginSchema = Joi.object({
  email: Joi.string().required().min(1),
  password: Joi.string().required().min(1),
})
  .messages({
    'any.required': errorMessage,
    'string.empty': errorMessage,
  });

module.exports = {
  addNewLoginSchema,
};