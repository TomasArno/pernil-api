import { Subcategories } from '../models/subcategories.model';

export default abstract class CategoriesService {
  static async create(data: {}) {
    try {
      return (await Subcategories.create(data))?.dataValues;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      // const { order, where, limit, offset } = opt as any;
      return await Subcategories.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return (await Subcategories.findByPk(id))?.dataValues;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data: {} = {}) {
    try {
      return await Subcategories.update(data, {
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string, data: {} = {}) {
    try {
      return await Subcategories.destroy({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }
}
