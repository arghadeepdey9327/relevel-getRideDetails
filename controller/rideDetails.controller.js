import {EventEmitter} from "node:events";
import { rideDetailsService } from "../service/rideDetails.service.js";

const event=new EventEmitter();

const rideDeatailsController=(req,res)=>{
   rideDetailsService();
   event.once('fecth getRideDetails Db data',data=>{
       res.status(302).send(data);
   });
event.once('No data found in getRideDetails DB',()=>{
  res.status(404).send('no data found');
});
}


export {event,rideDeatailsController};
