const { model, Schema } = require('mongoose');

const ProductoSchema = Schema(
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
        },
        costo:{
            type: Number,
            default:0
        },
        precio:{
            type:Number,
            default:0
        },
        minimo:{
            type:Number,
            default:0
        },
        categoria: {
            type: Schema.Types.ObjectId,
            ref:'Categoria',
            required:false
        }
    }
);


ProductoSchema.methods.toJSON = function(){
    const { __v,  estado,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Producto', ProductoSchema );