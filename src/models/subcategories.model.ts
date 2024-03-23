import sequelize, { DataTypes } from '../database';

export const Subcategories = sequelize.define('Subcategory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
