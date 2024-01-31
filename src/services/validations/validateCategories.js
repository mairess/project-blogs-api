const { Category } = require('../../models');

const validateCategories = async (categoryIds) => {
  const arrayOfPromises = categoryIds.map(async (id) => {
    const category = await Category.findByPk(id);
    if (!category) {
      throw new Error('one or more "categoryIds" not found');
    }
  });
  await Promise.all(arrayOfPromises);
};

module.exports = validateCategories;