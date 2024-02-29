import sequelize, { DataTypes } from '../database';

export const Suppliers = sequelize.define('Supplier', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phoneNumber: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	socialNetwork: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	isActive: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
});
