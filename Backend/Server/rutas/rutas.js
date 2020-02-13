const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')

router.get('/listar',controller.list);// funcion listar

router.post('/agregar',controller.save);// guardar datos

router.delete('/delete/:identificacion',controller.delete);//eliminar datos

router.put('/update/:identificacion',controller.edit);// actualizar datos o editar

module.exports=router ;