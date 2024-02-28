import { Request, Response } from 'express';
import * as pkg from '../../package.json';
import { isDevEnvironment } from '../utils/constants';
import testDBConnection from '../database/connection-tester';

class ServerController {
	static async getStatus(req: Request, res: Response) {
		const { name, version, author } = pkg;

		const dbStatus = await testDBConnection();
		const environment = isDevEnvironment() ? 'development' : 'production';

		const serverStatus = {
			name,
			version,
			author,
			environment,
			database: dbStatus,
		};

		res.json(serverStatus);
	}
}

export default ServerController;
