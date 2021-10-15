let prueba="5";

const persona = {
    nombre:"Roger",
    apellido:"Cruz",
    esEstudiante: true,
    prueba:prueba,
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    },
    geolocalizacion:{
        lat:12.23,
        lng:23.99
    }
}

// const estudiante = { ...persona, nombre:"Santiago" };
// console.log(estudiante)
// console.log(persona)

function mostrarDatos({ nombre, geolocalizacion:{ lat,lng } })
{
    console.log(nombre)
    console.log(lat)
    console.log(lng)
}
mostrarDatos(persona)