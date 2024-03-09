import { Products } from './model';

export abstract class ProductsSchema {
  static async create(data: {}) {
    try {
      return await Products.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      // const { order, where, limit, offset } = opt as any;
      return await Products.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: string) {
    try {
      return (await Products.findByPk(id))?.dataValues;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(id: string, data: {} = {}) {
    try {
      return await Products.update(data, {
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: string, data: {} = {}) {
    try {
      return await Products.destroy({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  static async getPrices(id: string) {
    const searchedProduct = await ProductsSchema.getById(id);

    if (searchedProduct) {
      return searchedProduct.price;
    }
  }
}
