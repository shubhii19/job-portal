import mongoose from "mongoose";

const connectToDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connected successfully.");
        
        
    } catch (error) {
        console.log();
        
    }
}

export default connectToDB;