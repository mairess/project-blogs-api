const { Category } = require('../models');
const { validateCategory } = require('./validations');

const creteNewCategory = async (categoryData) => {
  const error = validateCategory(categoryData);
  if (error) return { status: 'BAD_REQUEST', data: { message: error.message } };

  await Category.create(categoryData);

  const category = await Category.findOne({ where: { name: categoryData.name } });

  return { status: 'CREATED', data: category };
};

const getAll = async () => {
  const users = await Category.findAll();

  return { status: 'SUCCESSFUL', data: users };
};

module.exports = {
  creteNewCategory,
  getAll,
};
