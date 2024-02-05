import { Request, Response } from 'express';

function handleWrongMethod(req: Request, res: Response) {
	res.status(405).json({
		message: `${req.method} method not allowed on ${req.url}`,
	});
}

export default handleWrongMethod;
