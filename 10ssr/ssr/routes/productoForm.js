var express = require('express');
var router = express.Router();

const axios = require('axios');

router.post('/producto/operar', ( req,res,next )=>{

    console.log(req.body)

})
