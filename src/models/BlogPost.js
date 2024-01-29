module.exports = (sequelize, DataTypes) => {
    const BlogPostsModel = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      timestamps: false,
      underscored: true
    })
  
    BlogPostsModel.associate = ({ PostCategory, Category, User }) => {
      BlogPostsModel.belongsToMany(Category, {
        through: PostCategory,
        foreignKey: "postId",
        as: "postCategories",
        otherKey: "categoryId",
      });

      BlogPostsModel.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  
    return BlogPostsModel;
  };