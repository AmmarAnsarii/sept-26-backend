import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: './.env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`SERVER IS RUNNING AT PORT: ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MONGODB CONNECTION FAILED", error);
})












// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log("An error has occurred",error);
//         throw error;
//     }
// })
// ()