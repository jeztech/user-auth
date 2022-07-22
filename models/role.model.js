'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  role.init({
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
},
  
  {
    sequelize,
    modelName: 'role',
  });

  role.associate = function (models) {
    role.belongsToMany(models.users, {
      through: "user_role",
      foreignKey: "role_id",
      otherKey: "user_id" 
    });
  };

  return role;
};