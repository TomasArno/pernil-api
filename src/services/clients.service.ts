import { Clients } from '../models/clients.model';

export default abstract class ClientsService {
  static async create(data: {}) {
    try {
      return await Clients.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      // const { order, where, limit, offset } = opt as any;
      return await Clients.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return (await Clients.findByPk(id))?.dataValues;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data: {} = {}) {
    try {
      return await Clients.update(data, {
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string, data: {} = {}) {
    try {
      return await Clients.destroy({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }
}
