import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouter from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"
import listingRoutes from "./routes/listingRoutes.js"
import path from "path"
import path from "path"

dotenv.config()


const __dirname = path.resolve()

const app = express()

app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connected to Database');
}).catch((err)=>{
    console.log(err);
})


app.use('/api/auth', authRouter)
app.use('/api/user',userRoutes)
app.use('/api/listing',listingRoutes)

app.use(express.static(path.join(__dirname,'/client/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'client','dist','index.html'))
})
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(3000 ,()=>{
    console.log('Server running on Port 3000');
})