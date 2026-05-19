import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongooDB connected SUCCESSFULLY!");
        
    } catch (error) {
        console.error("ERROR connecting MomgoDB ===> ", error); 
        process.exit(1) // exit with failure
    }
}
