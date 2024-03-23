import { Request, Response } from 'express';

import Categories from '../services/subcategories.service';

abstract class subcategoriesController {
  static async create(req: Request, res: Response) {
    try {
      const resource = await Categories.create(req.body);

      res.status(200).json({
        data: resource,
      });
    } catch (error) {
      throw error;
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      // const { order, where, limit, offset } = opt as any;
      const all = await Categories.getAll();

      res.status(200).json({
        data: all,
      });
    } catch (error) {
      throw error;
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const resource = await Categories.getById(id);

      // hacer trow si es null resource

      res.status(200).json({
        data: resource,
      });
    } catch (error) {
      throw error;
    }
  }

  static async updateById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const a = await Categories.updateById(id, req.body);

      // si es 0 hacer throw

      res.status(200).json({
        message: 'Resource successfully modified',
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const a = await Categories.deleteById(id);

      // si a es 0 hacer throw

      res.status(200).json({
        message: 'Resource successfully deleted',
      });
    } catch (error) {
      throw error;
    }
  }
}

export default subcategoriesController;
