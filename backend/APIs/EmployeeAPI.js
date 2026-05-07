import exp from 'express'
import {empModel} from '../models/EmployeeModel.js'
import {config} from 'dotenv'

export const empApp=exp.Router()

empApp.post("/employees",async(req,res)=>{
    const newEmp=req.body
    const newEmpDocument=new empModel(newEmp)
    const result=await newEmpDocument.save()
    console.log("Result: ",result)
    res.status(201).json({message:"Employee Created"})
})

empApp.get("/employees",async(req,res)=>{
    const empList=await empModel.find()
    res.status(200).json({message:"All employees",payload:empList})
})

empApp.put("/employees/:id",async(req,res)=>{
    const modifiedemp=req.body
    const eid=req.params.id
    const updatedEmp=await empModel.findByIdAndUpdate(eid,{$set:{...modifiedemp}},{returnDocument:"after",runValidators:true})
    if(updatedEmp===null){
        res.status(404).json({message:"Employee not found"})
    }
    res.status(200).json({message:"Employee updated",payload:updatedEmp})
})

empApp.delete("/employees/:id",async(req,res)=>{
    const eid=req.params.id
    const deletedEmp=await empModel.findByIdAndDelete(eid)
    if(!deletedEmp){
        res.status(404).json({message:"Employee not found"})
    }
    res.status(200).json({message:"Employee Deleted",payload:deletedEmp})
})