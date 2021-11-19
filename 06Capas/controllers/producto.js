const { response } = require('express')
const { Producto } = require('../models')


const obtenerProductos= async (req, res = response )=>{

    //GET http://localhost:3000/productos   ?limite=100?desde=1
    const { limite = 10 , desde=0 } =  req.query;
    const query = { estado:true };

    const [ total, productos ] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query).skip(Number(desde)).limit(Number(limite))
    ])
  
    res.json({
      total, 
      productos
    })
    
}
const obtenerProducto= async (req, res =  response)=>{
    const {id} = req.params
    const producto=  await Producto.findById(id);
    res.json(producto);
}
const crearProducto= async (req, res = response)=>{
    const { estado, usuario, ...body } =  req.body;
    
    const existeProducto =  await Producto.findOne({nombre: body.nombre})

    if (existeProducto)
    {
        return res.status(400).json({
            msg:`El producto ${ existeProducto.nombre } ya existe`
        })
    }

    const data = {
        ...body,
        nombre: body.nombre
    }

    const producto = new Producto(data);

    const nuevoProducto =  await producto.save();
    res.status(201).json(nuevoProducto);
}
const actualizarProducto= async (req, res=response)=>{
    const {id} = req.params;
    const { estado, ...data } =  req.body;
    const productoModificado =  await Producto.findByIdAndUpdate(id,data, {new: true} )
    res.json(productoModificado);
}
const borrarProducto= async (req, res = response)=>{
    const {id} = req.params;
    const productoBorrado =  await Producto.findByIdAndUpdate(id, {estado:false}, {new:true} );
    res.json(productoBorrado);
}

module.exports = {
    obtenerProducto,
    obtenerProductos,
    crearProducto,
    actualizarProducto,
    borrarProducto
};