import { Request, Response } from 'express';

import { ProductsSchema } from '../models/products/schema';
abstract class ProductsController {
  static async create(req: Request, res: Response) {
    try {
      const resource = await ProductsSchema.create(req.body);

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
      const all = await ProductsSchema.getAll();

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

      const resource = await ProductsSchema.getById(id);

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

      const a = await ProductsSchema.updateById(id, req.body);

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

      const a = await ProductsSchema.deleteById(id);

      // si a es 0 hacer throw

      res.status(200).json({
        message: 'Resource successfully deleted',
      });
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsController;
