import * as http from 'http';
import app from './app';
import log from './config/logger';

const PORT = process.env.SERVER_PORT || 4000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
	log.info(`Server is running at http://localhost:${PORT}`);
});
