import { Request, Response } from 'express';

function handlePathError(req: Request, res: Response) {
	res.status(404).json({
		message: `${req.method} ${req.url} resource not found`,
	});
}

export default handlePathError;
