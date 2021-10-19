const libros =[
    {
        id:1,
        titulo:'Sistemas distribuidos NodeJs',
        idautor:1
    },
    {
        id:2,
        titulo:'Aprendiendo JS',
        idautor:2
    },
    {
        id:3,
        titulo: 'Clean Code JS',
        idautor:2
    }
]
const autores = [
    {
        id:1,
        nombre:'Pedro Miguel'
    },
    {
        id:2,
        nombre:'Juan AndrEs'
    },
    {
        id:3,
        nombre:'Julio Verne'
    }
]

function buscarLibroPorId(id, callback ){
    const libro = libros.find((libro)=>  libro.id===id );
    if (!libro)
    {
        const error  =  new Error();
        error.message = "Libro no encontrado"
        return callback(error) ;
    }
    callback(null, libro)
}
function buscarAutorPorId(id, callback){
    const autor = autores.find((autor)=>{ 
        return autor.id===id;
    })
    if (!autor)
    {
        const error = new Error();
        error.message = "Autor no encontrado"
        return callback(error)
    }
    return callback(null, autor)
}


buscarLibroPorId(1, (err, libro)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    buscarAutorPorId( libro.idautor, (err, autor)=>{
        libro.autor = autor;
        delete libro.idautor;
        console.log(libro)
    })
})


