import sequelize, { DataTypes } from '../database';

export const Categories = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
