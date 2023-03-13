import { Router } from 'express';
import { rideDeatailsController } from './controller/rideDetails.controller.js';

const app =Router();

app.get('/getRideDetails',rideDeatailsController);


export default app;
