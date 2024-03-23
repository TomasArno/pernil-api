import { Movements, Users, Clients, Suppliers } from '../models/index.model';

export default abstract class MovementsService {
  static async create(data: {}) {
    try {
      return (await Movements.create(data))?.dataValues;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      // const { order, where, limit, offset } = opt as any;
      return await Movements.findAll({
        include: [
          { model: Users, attributes: ['fullName'] },
          { model: Clients, attributes: ['name'] },
          { model: Suppliers, attributes: ['name'] },
        ],
        attributes: {
          exclude: ['UserId', 'ClientId', 'SupplierId', 'ProductId'],
        },
      });
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return await Movements.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data: {} = {}) {
    try {
      return await Movements.update(data, {
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string, data: {} = {}) {
    try {
      return await Movements.destroy({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }
}
