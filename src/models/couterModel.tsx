import {Schema,model} from "mongoose";


const CounterSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    }
});


export const CounterModel =  model("Counter", CounterSchema);