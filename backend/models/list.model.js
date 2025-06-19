
import mongoose from "mongoose";

const ListSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    color:{
        type:String
    },
    icon:{
        type:String
    }
},{
    timestamps:true
})


export const List = mongoose.model('List', ListSchema);

