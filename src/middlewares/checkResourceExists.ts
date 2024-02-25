import { NextFunction, Response } from "express";

const checkResourceExists =
  (controller: any) => (req: any, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const resource = controller.getById(id);

      resource.then((exists: {} | null) => {
        if (!exists) {
          const error = new Error("Resource not found");
          throw error;
        }

        req._resource = resource;
        next();
      });
    } catch (error) {
      next(error);
    }
  };

export default checkResourceExists;
