class Persona
{

    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido= apellido;
    }
    getNombreCompleto()
    {
        return this.nombre+" "+this.apellido;
    }

}

const persona = new Persona("Luis", "Montalvan");
let nombre =  persona.getNombreCompleto();
console.log(nombre);