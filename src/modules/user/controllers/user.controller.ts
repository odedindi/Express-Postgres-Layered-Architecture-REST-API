import { UserController } from '../repositories/user.repository';
import { Pool } from 'pg';

const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDB,
	password: process.env.PGPASSWORD,
	port: Number(process.env.PGPORT),
});

export const userController = new UserController(pool);
