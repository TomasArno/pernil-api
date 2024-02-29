const PORT = Number(process.env.PORT) || 63009;

const ENVIRONMENT = process.env.ENVIRONMENT || 'unknown';

const DB_URL = process.env.DB_URL || 'unknown';

const isDevEnvironment = () => ENVIRONMENT === 'development';
const areEnvironmentVariablesUploaded = () => DB_URL !== 'unknown';

if (!areEnvironmentVariablesUploaded()) {
	console.error('Environment variables are not setted properly...');
	process.exit(3);
}

export { PORT, DB_URL, isDevEnvironment };



