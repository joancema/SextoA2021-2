
const express  = require("express");
const cors = require("cors");

const app =  express();
const PUERTO =  3000;

let estudiantes = [];

app.use('/public', express.static(__dirname+'/public') )
app.use(cors()).use(express.json())

//     http://localhost:3000/apifacci/v1/estudiantes/individual&cedula=1231233333
//      http://localhost:3000/   GET , POST, PATCH,  PUT, DELETE

app.get('/', (req,res)=>{
    res.status(200).send(
        estudiantes
    )
})
app.get('/:cedula', (req,res)=>{
    const {cedula} =  req.params;
    let resultado = estudiantes.filter(p => p.cedula === cedula);
    if (resultado.length>0)
    {
        res.status(200).send(resultado[0]);
    }
    res.status(404).send({
        "mensaje":"No se puede encontrar el elemento con ese nUmero de cEdula"
    });


})
app.post('/', (req,res)=>{
    const {body} = req;
    
    estudiantes.push(body);
    res.status(200).send({
        mensaje:"dato insertado correctamente",
        repuesta: body
    })
})
app.put('/', (req,res)=>{
    const {cedula, nombre, curso} = req.body;
    let estudiante =  estudiantes.filter(p=> p.cedula === cedula)[0]
    estudiante.nombre = nombre;
    estudiante.curso = curso;
    res.status(200).send(
        {
            mensaje:"dato modificado correctamente",
            respuesta: estudiante
        }
    )

})
app.delete('/:cedula', (req,res)=>{
    const {cedula} =  req.params;
    let resultado = estudiantes.filter(p => p.cedula !== cedula);
    res.status(200).send({
        respuesta:"Eliminado el estudiante correctamente"
    })
})


app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})