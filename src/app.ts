import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';
import adminRouter from './routers/adminRouter.js';
import recommendationRouter from './routers/recommendationRouter.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/recommendations', recommendationRouter);
if (process.env.NODE_ENV === 'test') app.use('/admin', adminRouter);
app.use(errorHandlerMiddleware);

export default app;
