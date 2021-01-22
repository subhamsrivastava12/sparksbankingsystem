import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import customerRoutes from './routes/customer.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));
app.use(cors());
app.use('/customers',customerRoutes);
app.get('/',(req,res)=>{
  res.send('Welcome to banking System');
});

const CONNECTION_URL="mongodb+srv://subham12:12102000DOB@cluster0.h158v.mongodb.net/bankcustomer?retryWrites=true&w=majority";
const PORT=process.env.PORT||5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>app.listen(PORT,()=>{console.log("server running")}))
  .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);  