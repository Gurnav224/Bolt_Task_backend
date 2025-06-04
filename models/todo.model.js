
import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:['pending', 'completed','in-progress']
    },
},{
    timestamps:true
})

 
export const Todo  = mongoose.model('Todo', TodoSchema);


