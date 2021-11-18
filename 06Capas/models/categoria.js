const { model, Schema } = require('mongoose');

const CategoriaSchema = Schema(
    {
        nombre:{
            type: String,
            required: [ true, 'El nombre del producto es necesario'],
            unique:true
        },
        estado:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);


module.exports = model('Categoria', CategoriaSchema );