import sequelize, { DataTypes } from '../database';

export const Auth = sequelize.define('Auth', {
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
