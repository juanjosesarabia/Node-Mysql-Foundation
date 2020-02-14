const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/listar',controller.list);// funcion listar

router.post('/agregar',controller.save);// guardar datos

router.post('/delete',controller.delete);//eliminar datos



router.post('/buscar',controller.buscar);// buscar datos
module.exports=router ;