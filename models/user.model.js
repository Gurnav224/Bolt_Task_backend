
import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        trim:true,
        min:6
    },
    todos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'todos'
        }
    ]
},{timestamps:true})


export const User = mongoose.model('User', UserSchema);

