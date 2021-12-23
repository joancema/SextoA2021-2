window.addEventListener('load', function(){
    let htmlGenerado="";
    htmlGenerado+=`<label for="txtid">ID:</label>`
    htmlGenerado+=`<input type="text" id="txtid">`
    htmlGenerado+=`<label for="txtnombre">nombre:</label>`
    htmlGenerado+=`<input type="text" id="txtnombre">`
    htmlGenerado+=`<label for="txtprecio">precio:</label>`
    htmlGenerado+=`<input type="text" id="txtprecio">`
    htmlGenerado+=`<label for="txtcosto">costo:</label>`
    htmlGenerado+=`<input type="text" id="txtcosto">`
    htmlGenerado+=`<label for="txtminimo">minimo:</label>`
    htmlGenerado+=`<input type="text" id="txtminimo">`
    htmlGenerado+=`<button id="btnnuevo">Nuevo</button>`
    htmlGenerado+=`<button id="btngrabar">Grabar</button>`
    htmlGenerado+=`<button id="btnmodificar">Modificar</button>`
    htmlGenerado+=`<button id="btnconsultar">Consultar</button>`
    htmlGenerado+=`<button id="btneliminar">Eliminar</button>`
    htmlGenerado+=`<div id="divcontenido"></div>`
    htmlCuerpo.innerHTML = htmlGenerado;

    btnnuevo.addEventListener('click',function(){
        txtid.value='';
        txtnombre.value='';
        txtprecio.value='';
        txtcosto.value='';
        txtminimo.value='';
    })
    btngrabar.addEventListener('click',function(){
        let url=`http://localhost:5000/v1/inventario/api/productos`;
        let data={
            nombre: txtnombre.value,
            precio: txtprecio.value,
            costo: txtcosto.value,
            minimo: txtminimo.value,
        };
        fetch(url, {
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=> res.json())
        .then(resultado=> console.log(resultado))
        .catch(error=> console.log)
        // FIXME mostrar por consola resultado
    })
    btnmodificar.addEventListener('click', function(){
        let url=`http://localhost:5000/v1/inventario/api/productos/${txtid.value}`;
        let data={
            nombre: txtnombre.value,
            precio: txtprecio.value,
            costo: txtcosto.value,
            minimo: txtminimo.value,
        };
        fetch(url, {
            method:'PUT',
            body: JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=> res.json())
        .then(resultado=> console.log(resultado))
        .catch(error=> console.log(error))
    })
    btnconsultar.addEventListener('click',function(){
        let url=`http://localhost:5000/v1/inventario/api/productos`;
        fetch(url).then(resultado=>{
            return resultado.json()
        })
        .then(consulta=>{
            let tabla=`<table border=1>`
            for (const elemento  in consulta.productos )
            {
                const actual  =consulta.productos[elemento];
                tabla+= `<tr>`
                tabla+= `<td> <button class='actualizar' value='${actual._id}'>${ actual.nombre }</button> </td>`
                tabla+= `<td>${ actual.precio }</td>`
                tabla+= `<td>${ actual.costo }</td>`
                tabla+= `</tr>`
            }
            tabla+=`</table>`
            divcontenido.innerHTML = tabla;
            document.querySelectorAll('.actualizar').forEach(e=>{
                e.addEventListener('click',()=>{
                    fetch(`http://localhost:5000/v1/inventario/api/productos/${e.value}`)
                    .then(
                        respuesta=>{
                            return respuesta.json()
                        }
                    )
                    .then(convertido=>{
                        txtid.value= convertido._id;
                        txtnombre.value= convertido.nombre;
                        txtcosto.value= convertido.costo;
                        txtprecio.value= convertido.precio;
                        txtminimo.value= convertido.minimo;
                    })
                })
            })
        })
    })
    btneliminar.addEventListener('click',function(){
        let url=`http://localhost:5000/v1/inventario/api/productos/${txtid.value}`;
        fetch(url, {
            method:'DELETE',
        })
        .then(res=> res.json())
        .then(resultado=> console.log(resultado))
        .catch(error=> console.log(error))
    })
})


