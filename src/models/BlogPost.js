/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */
module.exports = (sequelize, DataTypes) => {
    const BlogPostsModel = sequelize.define('BlogPost', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      timestamps: false,
      underscored: true
    })
  
    BlogPostsModel.associate = ({ PostsCategories, Categories, User }) => {
      BlogPostsModel.belongsToMany(Categories, {
        through: PostsCategories,
        foreignKey: "postId",
        as: "categories",
        otherKey: "categoryId",
      });

      BlogPostsModel.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  
    return BlogPostsModel;
  };