const Joi = require('joi');

const errorMessage = 'Some required fields are missing';
const displayNameMinLengthMessage = '"displayName" length must be at least 8 characters long';
const passwordMinLengthMessage = '"password" length must be at least 6 characters long';
const emailMessage = '"email" must be a valid email';
const categoryIdNotFoundMessage = 'one or more "categoryIds" not found';

const schemaLogin = Joi.object({
  email: Joi.string().required().min(1),
  password: Joi.string().required().min(1),
}).messages({ 'any.required': errorMessage, 'string.empty': errorMessage });

const schemaNewUser = Joi.object({
  displayName: Joi.string().required().min(8)
    .messages({ 'string.min': displayNameMinLengthMessage }),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6) 
    .messages({ 'string.min': passwordMinLengthMessage, 'string.email': emailMessage }) });

const schemaCategory = Joi.object({ name: Joi.string().required().min(1) });

const schemaNewPost = Joi.object({
  title: Joi.string().required().min(1),
  content: Joi.string().required().min(1),
  categoryIds: Joi.array().required().min(1),
  email: Joi.string(),
}).messages({ 
  'string.empty': errorMessage, 
  'any.required': errorMessage,
  'array.min': categoryIdNotFoundMessage,
});

const schemaUpdatePost = Joi.object({
  title: Joi.string().required().min(1),
  content: Joi.string().required().min(1),
}).messages({ 'string.empty': errorMessage, 'any.required': errorMessage });

module.exports = {
  schemaLogin,
  schemaNewUser,
  schemaCategory,
  schemaNewPost,
  schemaUpdatePost,
};