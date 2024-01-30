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

const addCreateNewUserSchema = Joi.object({
  displayName: Joi.string().required().min(8)
    .messages({
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
  email: Joi.string().email().required()
    .messages({
      'string.email': '"email" must be a valid email',
    }),
  password: Joi.string().required().min(6)
    .messages({
      'string.min': '"password" length must be at least 6 characters long',
    }),
});

const addNewCategorySchema = Joi.object({
  name: Joi.string().required().min(1),
});

module.exports = {
  addNewLoginSchema,
  addCreateNewUserSchema,
  addNewCategorySchema,
};