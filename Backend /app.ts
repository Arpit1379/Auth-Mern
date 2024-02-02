import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {Request,Response} from 'express';

const app=express();
app.use(cors());
app.use(express.json());

app.post("/login",(req:Request,res:Response)=>{
    const { email, password } = req.body;
    if(email==="arpitkalra15@gmail.com" && password==="123"){
        res.json({message:"login sucessfull"});
    }else{
        res.status(401).send("invalid credincials");
    }
});

app.listen(3000,()=>{
    console.log('your server is read at port 3000');
});