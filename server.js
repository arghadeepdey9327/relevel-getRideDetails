import express, { json } from 'express';
import env from 'dotenv';
import cors from 'cors';
import app from './app.js';
import mongoose from 'mongoose';
import { rideDeatails } from './Model/ride.model.js';

const server=express();

env.config();
server.use(cors());
server.use(json());
server.use(app);

let rideDeatailsModel='';

const conn1=mongoose.createConnection(process.env.URI)

.once('connected',()=>{
    rideDeatailsModel=conn1.model('rideDetails',rideDeatails);
    console.log('rideDeatails db connected');
    server.listen(process.env.PORT,()=>console.log('server running'));
});

export {rideDeatailsModel};



