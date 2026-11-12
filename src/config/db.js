import mongoose from "mongoose"

export const connectdb=async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
console.log("connected successfully")

    }
catch(error){
    console.error("error connecting to mongodb",error)
    process.exit(1)

}


}

