const { PostCategory } = require('../models');

const associateCategoryWithPost = async (postId, categoryIds, transaction) => {
  const arrayOfPostCategory = categoryIds.map((categoryId) => ({ postId, categoryId }));
  await PostCategory.bulkCreate(arrayOfPostCategory, transaction);
};

module.exports = associateCategoryWithPost;