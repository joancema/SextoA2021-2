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

function buscarLibroPorId(id)
{
    return new Promise((resolve, reject)=>{
        const libro = libros.find((libro)=>  libro.id===id );
        if (!libro)
        {
            const error = new Error();
            error.message="Libro no encontrado";
            reject(error);
        }
        resolve(libro);
    })
}
function buscarAutorPorId(libro)
{
    return new Promise((resolve, reject)=>{
        const autor = autores.find((autor)=>{ 
            return autor.id===libro.idautor;
        })
        if (!autor)
        {
            const error = new Error();
            error.message="Autor no encontrado";
            reject(error);
        }
        libro.autor= autor;
        resolve(libro);
    })
}
buscarLibroPorId(1).then((libro)=>{
    return buscarAutorPorId(libro);
}).then((libro)=>{
    console.log(libro)
}).catch((error)=>{
    console.log(error.message)
})