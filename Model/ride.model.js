import mongoose from 'mongoose';

const rideDeatails=mongoose.Schema({
    fromCity:{
        type:String,
        require:true,
    },
    toCity:{
        type:String,
        require:true
    },
    timings:{
        type:String,
        require:true
    },
    driverName:{
        type:String,
        require:true
    },
    totalRideTime:{
        type:String,
        require:true
    },
    driverRatings:{
        type:Number,
        require:true
    }
});
export {rideDeatails};
