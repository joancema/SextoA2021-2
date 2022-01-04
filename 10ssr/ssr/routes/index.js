var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Prueba' });

  axios.get('http://localhost:5000/v1/inventario/api/productos').then(respuesta=>{

    console.log(respuesta.data.productos);
    res.render('index', { productos: respuesta.data.productos   } )

  })


});

module.exports = router;
