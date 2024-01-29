/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const PostCategoryModel = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  PostCategoryModel.associate = ({ PostCategory, Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: "categoryId",
      as: "postCategories",
      otherKey: "postId",
    });

    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: "postId",
      as: "blogCategories",
      otherKey: "categoryId",
    });
  };

  return PostCategoryModel;
};
