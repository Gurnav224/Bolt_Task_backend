
import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: [ 'pending', 'completed', 'in-progress' ],
        default: 'pending'
    },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List',
        required: true
    },
    due_date: {
        type: Date,
    },
    tags: [{
        type: String,
        trim: true
    }],
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'users',
    //   required:true  
    },
    subtasks: [
       {
        title: {
            type: String,
            required: true
        },
       }
    ]
}, {
    timestamps: true
})


export const Todo = mongoose.model('Todo', TodoSchema);


