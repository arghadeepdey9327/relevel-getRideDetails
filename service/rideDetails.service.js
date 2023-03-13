import { event } from "../controller/rideDetails.controller.js";
import {rideDeatailsModel} from '../server.js';

const rideDetailsService=()=>
    rideDeatailsModel.find({})
    .then(data=>{
        if(data===null){
            event.emit('No data found in getRideDetails DB');
        }
        else{
            event.emit('fecth getRideDetails Db data',data);
        }
        
    });


export {rideDetailsService};
