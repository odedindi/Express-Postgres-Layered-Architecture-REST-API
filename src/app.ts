import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import userRouter from './modules/user/routes/user.routes';
dotenv.config();

const app = express();

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	}),
);

app.use(cors());
app.use(compression());

app.use('/api/v1', userRouter);

export default app;
