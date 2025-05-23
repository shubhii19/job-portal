import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import connectToDB from "./utils/db.js";
dotenv.config({});
import userRoute from './routes/userRoutes.js';
import companyRoute from './routes/companyRoutes.js';
import jobRoute from './routes/jobRoute.js';
import applicationRoute from './routes/applicationRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions));
// connectToDB();
const PORT = process.env.PORT || 3000;

// api's

app.use("/api/v1/user",userRoute)
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

app.listen(PORT,()=>{
    connectToDB();
    // console.log(connectToDB())
    console.log(`Server is running on port ${PORT}`)
})