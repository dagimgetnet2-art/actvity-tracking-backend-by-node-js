import express from "express"
import notesRouter from "./routes/notesRouter.js"
import { connectdb } from "./config/db.js"
import dotenv from "dotenv"

dotenv.config();
console.log("Mongo URI exists:", !!process.env.MONGO_URI)
const app = express();

app.use(express.json())
connectdb();
app.use("/api/notes", notesRouter)

app.listen(5001, () => {
  console.log("Server is running on port 5001")
})

