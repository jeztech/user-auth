'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_roles.init({
      // createdAt: DataTypes.DATE,
      // deletedAt: DataTypes.DATE, 
      role_id: DataTypes.INT,
      user_id: DataTypes.INT
    },
  {
    sequelize,
    modelName: 'user_role',
  });

  user.associate = function (models) {
    user.belongsToMany(models.users, {
      through: "user",
      foreignKey: "user_id",
      otherKey: "role_id"    
    });
  }

  return user_roles;
};