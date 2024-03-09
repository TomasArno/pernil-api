import { Request, Response, NextFunction } from 'express';

function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res.status(error.cause || 500).json({
    response: `${req.method} ${req.url} ${error.message}`,
  });
}

export default errorHandler;
