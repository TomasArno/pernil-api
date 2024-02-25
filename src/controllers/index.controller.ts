import { Model, ModelStatic } from "../database";
abstract class BaseManager {
  private static _model: ModelStatic<Model>;

  constructor(model: ModelStatic<Model>) {
    BaseManager._model = model;
  }

  static async create(data: {}) {
    try {
    } catch (error) {
      throw error;
    }
  }

  static async getAll(opt: {}) {
    try {
      // const { order, where, limit, offset } = opt as any;
      return await BaseManager._model.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getById(id: number | string): Promise<Model | null> {
    try {
      const resource = await BaseManager._model.findByPk(id);

      return resource;
    } catch (error) {
      throw error;
    }
  }

  static async updateById(
    id: number | string,
    data: {}
  ): Promise<boolean | null> {
    try {
      const [affectedRows] = await BaseManager._model.update(data, {
        where: { id },
      });

      const isAffected = affectedRows >= 1;

      return isAffected || null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(id: number | string): Promise<boolean | null> {
    try {
      const deletedRows = await BaseManager._model.destroy({
        where: { id },
      });

      const isDeleted = deletedRows >= 1;

      return isDeleted || null;
    } catch (error) {
      throw error;
    }
  }
}

export { BaseManager };
