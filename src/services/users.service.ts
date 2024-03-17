import { Users } from '../models/users.model';

export default abstract class UsersService {
  static async create(data: {}) {
    try {
      return await Users.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getAll(filter: {}) {
    try {
      // const { order, where, limit, offset } = opt as any;
      const users = await Users.findAll({ where: filter });

      const usersParsed = users.map((element) => element.dataValues);

      return usersParsed;
    } catch (error) {
      throw error;
    }
  }

  static async getByFullName(fullName) {
    try {
      // const { order, where, limit, offset } = opt as any;

      const user = (await this.getAll({ fullName }))[0];

      return user ? user : {};
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