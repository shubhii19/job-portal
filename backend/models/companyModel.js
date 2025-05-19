import mongoose, { modelNames } from "mongoose";

const companySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true,
  },
  description: {
    type: String,
  },
  website: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  logo:{
    type:String,       //URL to company logo
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  }
},{timestamps:true}); 

export const Company = mongoose.model("Company",companySchema);
