import sequelize, { DataTypes } from '../database';

export const Users = sequelize.define('User', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
