const server  =  require('./src/app');

server.listen(process.env.PORT, ()=>{
    console.log(`Servidor monolithic corriendo ${process.env.PORT}`)
})