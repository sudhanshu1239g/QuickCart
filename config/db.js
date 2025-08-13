
import mongoose, { Promise } from "mongoose";

let cached=global.mongoose
if(!cached){
    cached=global.mongoose = {conn:null , promise:null}
}

async function connectDB() {
    if(cached.conn){
        return cached.conn
    }
    if(!cached.Promise){
        const opts={
            bufferCommands:false
        }
        cached.promise= (await mongoose.connect(`${process.env.MongoDB_URI}/quickcart`,opts)).then(mongoose=>{
            return mongoose
        })
    }
    cached.conn= await cached.promise
    return cached.conn

}
export default connectDB