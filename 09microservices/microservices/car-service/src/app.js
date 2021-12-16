const express = require('express');
const app = express();

const response = {
    data:[],
    services:"Car Service",
    arquitecture:"Microservices"
};

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/cars",(req,res)=>{
    response.data.push("Versa","BMW", "Kia");
    console.log(`Get car data`)
    return res.send(response);
})


module.exports =  app;