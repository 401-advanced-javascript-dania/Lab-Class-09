'use strict';
//3rd party dependencies 
const express= require('express');
const morgan=require('morgan');
const cors =require('cors');
const apiRouter=require('../routes/routes.js')
//custom routes
// application constant 
const app =express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(apiRouter)

module.exports={
    server:app,
    start:port=>{
        let PORT =port||process.env.port||3000;
        app.listen(PORT,()=>console.log(`listen on ${PORT}`))
    }
}