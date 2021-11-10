/**
 * API Routes
 * @url /api/v1/[resource]
 */

// Users
// RequestType   Path                           Action
// ===================================================================
// GET           /users                         getAll
// POST          /users                         create

// GET           /users:id		                getById
// PUT/PATCH     /users:id		                update
// DELETE        /users:id		                destroy

import { Router } from 'express';
import log from '../../../config/logger';

import { userController } from '../controllers/user.controller';

const router = Router();

router.use(log.routerTimeLog);

router.get('/', (_req, res) => res.status(201).json({ message: 'OK' }));

router.route('/users').get(userController.getAll).post(userController.create);

router
	.route('/users/:id')
	.get(userController.getById)
	.put(userController.update)
	.patch(userController.update)
	.delete(userController.delete);

export default router;
