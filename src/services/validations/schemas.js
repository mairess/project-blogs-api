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

const addNewPostSchema = Joi.object({
  title: Joi.string().required().min(1),
  content: Joi.string().required().min(1),
  categoryIds: Joi.array().required().min(1),
  email: Joi.string(),
})
  .messages({
    'string.empty': errorMessage,
    'any.required': errorMessage,
    'array.min': 'one or more "categoryIds" not found',
  });

const addNewUpdatePostSchema = Joi.object({
  title: Joi.string().required().min(1),
  content: Joi.string().required().min(1),
})
  .messages({
    'string.empty': errorMessage,
    'any.required': errorMessage,
  });

module.exports = {
  addNewLoginSchema,
  addCreateNewUserSchema,
  addNewCategorySchema,
  addNewPostSchema,
  addNewUpdatePostSchema,
};