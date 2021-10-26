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

async function buscarLibroPorId(id){
    const libro = libros.find((libro)=>  libro.id===id );
    if (!libro)
    {
        const error = new Error();
        error.message="No encontramos el libro";
        throw error;
    }
    return libro;
}
async function buscarAutorPorId(id){
    const autor = autores.find((autor)=>{ 
        return autor.id===id;
    })
    if (!autor)
    {
        const error= new Error();
        error.message="No encontramos el autor";
        throw error;
    }
    return autor;
}


libros.forEach( async (libro)=>{
    const librox = await  buscarLibroPorId(libro.id);
    console.log(librox)
})


/*
(async ()=>
{
    try
    {
        const libro = await  buscarLibroPorId(1);
        const autor = await buscarAutorPorId(libro.idautor);
        libro.autor = autor;
        console.log(libro)
    }
    catch(err)
    {
        console.log(err.message)
    }

})();
*/


