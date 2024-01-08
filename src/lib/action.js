"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from 'bcryptjs'
export const handleGithubSignIn = async (e) => {
  await signIn("github");
};
export const handleGithubSignOut = async (e) => {
  await signOut();
};

export const handleSignUp = async (prevState,formData) => {
  const { username, email, password } = Object.fromEntries(formData);
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt)
  try {
    connectToDB();
    const user = await User.findOne({ email: email });
    if (user) {
      return {error:'User already exists.'}
    } 
    const newUser = new User({
      username,
      email,
      password:hashedPassword,
    });
    await newUser.save();
    console.log("successfully registered.");
    return {success:true}
  } catch (error) {
    console.log(error);
    return {error:error};
  }
};


export const login = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    if(err instanceof AuthError){
      if(err.type === 'CredentialsSignin'){
        return {error:"Invalid credentials"}
      }
    }
    throw err
  }
};

export const addPost = async(prevState,formData)=>{
  connectToDB()
  try {
    const {slug,title,description,img} = Object.fromEntries(formData)
    const newPost = new Post({
      slug,title,description,img
    });
    await newPost.save()
  } catch (error) {
    console.log(error)
    return {error:error}
  }
}

export const addUser = async(prevState,formData)=>{
  connectToDB()
  try {
    const {username,email,password,img} = Object.fromEntries(formData)
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hashSync(password,salt)
    const newUser = new User({
      username,email,password:hashedPassword,img
    });
    await newUser.save()
  } catch (error) {
    console.log(error)
    return {error:error}
  }
}

export const deletePost = async(formData)=>{
  connectToDB()
  const {id} = Object.fromEntries(formData)
  try {
   await Post.findByIdAndDelete(id) 
  } catch (error) {
    console.log(error)
    return {error:error}
  }
}
export const deleteUser = async(formData)=>{
  connectToDB()
  const {id} = Object.fromEntries(formData)
  try {
     await User.findByIdAndDelete(id) 
  } catch (error) {
    console.log(error)
    
  }
}