/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */
module.exports = (sequelize, DataTypes) => {
  const CategoriesModel = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true
  })

  CategoriesModel.associate = ({ PostsCategories, BlogPosts }) => {
    CategoriesModel.belongsToMany(BlogPosts, {
      through: PostsCategories,
      foreignKey: 'categoryId',
      as: 'posts',
      otherKey: "postId",
    });
  }

  return CategoriesModel;
};