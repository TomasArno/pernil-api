import { Users } from '../models/users';

export default abstract class UsersService {
  static async create(data: {}) {
    try {
      return await Users.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(filter:{}) {
    try {
      // const { order, where, limit, offset } = opt as any;
      return await Users.findAll({where: filter});
    } catch (error) {
      throw error;
    }
  }

  static async getByEmail(email) {
    try {
      // const { order, where, limit, offset } = opt as any;
      return await this.getAll({email})
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return (await Users.findByPk(id))?.dataValues;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data: {} = {}) {
    try {
      return await Users.update(data, {
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string, data: {} = {}) {
    try {
      return await Users.destroy({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }
}
