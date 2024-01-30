const { Category } = require('../models');
const schema = require('./validations/validationInputValues');

const creteNewCategory = async (categoryData) => {
  const error = schema.validateCategory(categoryData);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  await Category.create(categoryData);

  const category = await Category.findOne({ where: { name: categoryData.name } });

  return { status: 'CREATED', data: category };
};

module.exports = {
  creteNewCategory,
};
