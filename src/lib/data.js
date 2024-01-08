import { Post, User } from "./models"
import { connectToDB } from "./utils";

export const getPosts = async()=>{
    connectToDB()
    try {
        const posts = await Post.find();
        return posts
    } catch (error) {
        console.log(error)
    }
}
export const getPost = async(slug)=>{
    connectToDB()
    try {
        const post = await Post.findOne({slug:slug});
        return post
    } catch (error) {
        console.log(error)
    }
}
export const getUser = async(id)=>{
    connectToDB()
    try {
        const user = await User.findById(id);
        return user
    } catch (error) {
        console.log(error)
    }
}
export const getUsers = async(id)=>{
    connectToDB()
    try {
        const users = await User.find();
        return users
    } catch (error) {
        console.log(error)
    }
}
