const http = require("http");
const fs =  require("fs");
const path = require("path");

const express = require("express");
const cors =  require("cors");

const PUERTO = 8080;

const inicio =  fs.readFileSync('./index.html');
const acercade =  fs.readFileSync('./about.html');
const error =  fs.readFileSync('./error.html');
const urlError = path.join(__dirname,"./error.html")

 
const server =  express();

server.use(cors()).use(express.json())


server.get('/', funcionx )

server.get('/about', (req,res)=>{
    //  res.write(acercade);
    // res.end();
    res.status(200).send({
        respuesta:"gracias"
    })
})
server.use((req,res, next)=>{

    res.status(400).sendFile(urlError);
})



function funcionx (req, res){
    res.write(inicio);
     res.end();
}


server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})



// 
    // http.createServer((request,response )=>{
    //     const { url } = request;
    //     if (url==="/")
    //     {
    //         response.writeHead(200, { "Content-Type":"text/html" });
    //         response.write(inicio);
    //     }
    //     else if (url==="/about")
    //     {
    //         response.writeHead(200, { "Content-Type":"text/html" });
    //         response.write(acercade);
    //     }
    //     else
    //     {
    //         response.writeHead(404, { "Content-Type":"text/html" });
    //         response.write(error);
    //     }


    // }).listen(PUERTO, ()=>{
    //     console.log(`Servidor corriendo en puerto http://localhost:${PUERTO}`)
    // })