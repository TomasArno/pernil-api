import { Suppliers } from '../models/suppliers.model';

export default abstract class SuppliersService {
  static async create(data: {}) {
    try {
      return (await Suppliers.create(data))?.dataValues;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      // const { order, where, limit, offset } = opt as any;
      return await Suppliers.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return (await Suppliers.findByPk(id))?.dataValues;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data: {} = {}) {
    try {
      return await Suppliers.update(data, {
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string, data: {} = {}) {
    try {
      return await Suppliers.destroy({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }
}
