import { Request, Response } from 'express';

function pathHandler(req: Request, res: Response) {
	res.json({
		message: `${req.method} ${req.url} resource not found`,
	});
}

export default pathHandler;
