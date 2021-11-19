const { Router } = require('express')
const { check } =  require('express-validator')

const { crearProducto,
     obtenerProducto, 
     obtenerProductos,
     actualizarProducto,
     borrarProducto } = require('../controllers').Producto;

const { validarCampos } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/    productos/      

router.get('/', obtenerProductos);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , obtenerProducto);

router.post('/',[
    check('nombre', 'EL nombre es requerido').not().isEmpty(),
    validarCampos
] , crearProducto)

router.put('/:id', actualizarProducto)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], borrarProducto)

module.exports = router;