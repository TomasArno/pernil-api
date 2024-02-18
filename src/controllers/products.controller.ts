import { Request, Response } from 'express';

async function getAll(req: Request, res: Response) {
	res.json({
		message: 'This is a test',
	});
}

export { getAll };
