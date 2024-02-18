import { Request, Response, NextFunction } from 'express';

function errorHandler(
	error: any,
	req: Request,
	res: Response,
	next: NextFunction
) {
	return res.json({
		statusCode: error.statusCode || 500,
		response: `${req.method} ${req.url} ${error.message}`,
	});
}

export default errorHandler;
