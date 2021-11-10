import { Request, Response } from 'express';
import { Pool } from 'pg';
import log from '../../../config/logger';

export interface IUserController {
	pool: Pool;
	getAll: (_req: Request, res: Response) => void;
	getById: (req: Request, res: Response) => void;
	create: (req: Request, res: Response) => void;
	update: (req: Request, res: Response) => void;
	delete: (req: Request, res: Response) => void;
}
export class UserController implements IUserController {
	pool: Pool;
	constructor(pool: Pool) {
		this.pool = pool;
	}

	getAll = (_req: Request, res: Response) => {
		const query = {
			text: 'SELECT * FROM users ORDER BY id ASC',
		};
		this.pool.query(query, (error, results) => {
			if (error) throw log.error(`${error}`);
			res.status(200).json(results.rows);
		});
	};

	getById = (req: Request, res: Response) => {
		const id = parseInt(req.params.id, 10);
		const query = {
			text: 'SELECT * FROM users WHERE id = $1',
			values: [id],
		};
		this.pool.query(query, (error, results) => {
			if (error) throw log.error(`${error}`);

			res.status(200).json(results.rows);
		});
	};

	create = (req: Request, res: Response) => {
		const { name, email } = req.body;
		const query = {
			text: 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
			values: [name, email],
		};
		this.pool.query(query, (error, results) => {
			if (error) throw log.error(`${error}`);
			else if (!Array.isArray(results.rows) || !results.rows.length)
				throw log.error(`${error}`);
			res.status(201).send(`User added with ID: ${results.rows[0].id}`);
		});
	};

	update = (req: Request, res: Response) => {
		const id = parseInt(req.params.id, 10);
		const { name, email } = req.body;
		const query = {
			text: 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
			values: [name, email, id],
		};
		this.pool.query(query, (error, results) => {
			if (error) throw log.error(`${error}`);
			if (!results.rows) res.status(404).send(`Resource not found`);
			else if (Array.isArray(results.rows) && !results.rows.length)
				res.status(404).send(`User not found`);
			else res.status(200).send(`User modified with ID: ${results.rows[0].id}`);
		});
	};

	delete = (req: Request, res: Response) => {
		const id = parseInt(req.params.id, 10);
		const query = {
			text: 'DELETE FROM users WHERE id = $1',
			values: [id],
		};
		this.pool.query(query, (error, _results) => {
			if (error) throw log.error(`${error}`);
			res.status(200).send(`User deleted with ID: ${id}`);
		});
	};
}
