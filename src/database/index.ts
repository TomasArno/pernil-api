import { Sequelize, DataTypes, Op, ModelStatic, Model } from 'sequelize';
import { DB_URL } from '../utils/constants';

const sequelize = new Sequelize(DB_URL);
// sequelize.sync({ alter: true });

export default sequelize;
export { DataTypes, Op, ModelStatic, Model };
