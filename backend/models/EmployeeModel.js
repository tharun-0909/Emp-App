import {Schema,model} from 'mongoose'

const empSchema=new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already exists"]
    },
    mobile:{
        type:Number,
        required:[true,"Mobile number is required"],
    },
    designation:{
        type:String,
        required:[true,"designation is required"],
    },
    companyName:{
        type:String,
        required:[true,"Company Name is required"]
    }
})

export const empModel=model("emp",empSchema)