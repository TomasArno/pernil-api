import { Request, Response } from 'express';

function handleWrongMethod(req: Request, res: Response) {
	res.json({
		message: `${req.method} method not allowed on ${req.url}`,
	});
}

export default handleWrongMethod;
