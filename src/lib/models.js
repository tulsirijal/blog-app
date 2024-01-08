import mongoose from "mongoose"

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    password:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    img:{
        type:String, 
    },
    isAdmin:{
        type:Boolean,
        default:false
    } 
},{timestamps:true})


const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    img:{
        type:String, 
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})


export const User = mongoose.models?.User ||  mongoose.model('User',UserSchema)
export const Post =mongoose.models?.Post ||  mongoose.model('Post',PostSchema)