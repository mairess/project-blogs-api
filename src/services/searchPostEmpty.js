const { BlogPost, User, Category } = require('../models');

const searchPostEmpty = async (email) => {
  const user = await User.findOne({ where: { email } });
  const AllPosts = await BlogPost.findAll({ 
    where: { userId: user.id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, 
        as: 'categories', 
        attributes: { exclude: ['PostCategory'] }, 
        through: { attributes: [] } }],
  });
  console.log('AllPosts', AllPosts);
          
  return { status: 'SUCCESSFUL', data: AllPosts };
};

module.exports = searchPostEmpty;