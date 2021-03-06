import { Router } from 'express';
import * as adminController from '../controllers/adminController.js';

const adminRouter = Router();

adminRouter.delete('/database', adminController.truncateDatabase);

adminRouter.post('/database/populate', adminController.populateDatabase);

export default adminRouter;
