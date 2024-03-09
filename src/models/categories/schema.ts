import { Categories } from './model';

export abstract class CategoriesSchema {
  static async create(data: {}) {
    try {
      return await Categories.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      // const { order, where, limit, offset } = opt as any;
      return await Categories.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return (await Categories.findByPk(id))?.dataValues;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data: {} = {}) {
    try {
      return await Categories.update(data, {
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string, data: {} = {}) {
    try {
      return await Categories.destroy({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }
}
