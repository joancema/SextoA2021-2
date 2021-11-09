const http = require("http");
const fs =  require("fs");

const express = require("express");


const PUERTO = 8080;

const inicio =  fs.readFileSync('./index.html');
const acercade =  fs.readFileSync('./about.html');
const error =  fs.readFileSync('./error.html');


http.createServer((request,response )=>{
    const { url } = request;
    if (url==="/")
    {
        response.writeHead(200, { "Content-Type":"text/html" });
        response.write(inicio);
    }
    else if (url==="/about")
    {
        response.writeHead(200, { "Content-Type":"text/html" });
        response.write(acercade);
    }
    else
    {
        response.writeHead(404, { "Content-Type":"text/html" });
        response.write(error);
    }


}).listen(PUERTO, ()=>{
    console.log(`Servidor corriendo en puerto http://localhost:${PUERTO}`)
})