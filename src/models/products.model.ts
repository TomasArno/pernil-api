import sequelize, { DataTypes } from '../database';

export const Products = sequelize.define('Product', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	stock: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	buy: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	sell: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	isActive: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
});
