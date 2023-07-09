const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const colors=require('colors');
const dotenv=require('dotenv');
const connectdb = require('./config/db');
const path=require('path')
//env config
dotenv.config()
//mongodb
connectdb();
//rest object
const app=express();
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'./client/build')));
//routes import
const userRoutes=require('./routes/userRoutes')
const blogRoutes =require('./routes/blogRoutes')
//routes
app.use('/api/v1/user',userRoutes);
app.use("/api/v1/blog",blogRoutes);


app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
});
//listen
const PORT=process.env.PORT||8080
app.listen(8080,()=>{
    console.log(`server is running on port on ${PORT}`.bgCyan.white);
});