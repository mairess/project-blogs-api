/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */
module.exports = (sequelize, DataTypes) => {
    const UserModel = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      timestamps: false,
      underscored: true
    })
  
    UserModel.associate = ({ BlogPost }) => {
      UserModel.hasMany(BlogPost, {
        foreignKey: "userId",
        as: "userPosts",
      });
    }
  
    return UserModel;
  };