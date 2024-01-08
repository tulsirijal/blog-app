import mongoose from "mongoose"

export const connectToDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log('connected')
    } catch (error) {
        console.log(error)
    }
}

