import exp from 'express'
import {config} from 'dotenv'
import {connect} from 'mongoose'
import {empApp} from './APIs/EmployeeAPI.js'
import cors from 'cors'

config()

const app=exp()

//add cors middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}))

app.use(exp.json())

const port=process.env.PORT || 3000

app.use("/emp-api",empApp)

async function connectDB(){
    try{
        await connect(process.env.DB_URL)
        console.log("DB connected successfully")
        app.listen(port,()=>{console.log(`Your server is running in port ${port}...`)})
    }
    catch(err){
        console.log("error in DB connection",err)
    }
}
connectDB()

app.use((err,req,res,next)=>{
    // res.json({message:"error occured",error:err.message})
    //Validation error
    console.log(err.name)
    console.log(err.code)
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"Error occured in validation",error:err.message})
    }
    //Cast Error
    if(err.name==="CastError"){
        return res.status(400).json({message:"Error occured",error:err.message})
    }
    //send server side error
    res.status(500).json({message:"Error occured",error:err.message})
})