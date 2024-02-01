const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const searchPostEmpty = require('./searchPostEmpty');

const searchPost = async (searchTerm, email) => {
  if (!searchTerm) {
    return searchPostEmpty(email);
  }
  const post = await BlogPost.findAll({
    where: { 
      [Op.or]: [
        { title: { [Op.like]: `%${searchTerm}` } },
        { content: { [Op.like]: `%${searchTerm}` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, 
        as: 'categories', 
        attributes: { exclude: ['PostCategory'] }, 
        through: { attributes: [] } }],
  });

  return { status: 'SUCCESSFUL', data: post };
};

module.exports = searchPost;