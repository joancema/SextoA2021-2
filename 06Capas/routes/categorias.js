const { Router } = require('express');
const { check } =  require('express-validator')


const {
    crearCategoria,
    obtenerCategoria,
    obtenerCategorias,
    actualizarCategoria,
    borrarCategoria
} = require('../controllers').Categoria;

const { validarCampos } = require('../middlewares')

const router= Router();

router.get('/', obtenerCategorias );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , obtenerCategoria );

 router.post('/',[
    check('nombre', 'EL nombre es requerido').not().isEmpty(),
    validarCampos
], crearCategoria);


 router.put('/:id', actualizarCategoria);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], borrarCategoria);



module.exports = router;