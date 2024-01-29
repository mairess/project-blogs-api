module.exports = (sequelize, DataTypes) => {
  const CategoriesModel = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING
  }, {
    timestamps: false,
    underscored: true
  })

  CategoriesModel.associate = ({ PostCategory, BlogPost }) => {
    CategoriesModel.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      as: 'blogPosts',
      otherKey: "postId",
    });
  }

  return CategoriesModel;
};