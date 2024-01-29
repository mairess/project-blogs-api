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

  PostCategoryModel.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      through: PostCategoryModel,
      foreignKey: "categoryId",
      as: "posts",
      otherKey: "postId",
    });

    BlogPost.belongsToMany(Category, {
      through: PostCategoryModel,
      foreignKey: "postId",
      as: "categories",
      otherKey: "categoryId",
    });
  };

  return PostCategoryModel;
};
