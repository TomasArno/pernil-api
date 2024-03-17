import sequelize, { DataTypes } from '../database';

export const Movements = sequelize.define('Movement', {
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  units: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  //   operation: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     defaultValue: 0,
  //   }, es una relacion
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  state: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});
