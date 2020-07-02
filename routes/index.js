//Express router

const express = require('express');
const router = express.Router();

//Importar express validator
const {body} = require('express-validator/check');


//importar el controlador
const proyectosController = require('../controllers/proyectosController');

module.exports = function() {
    //Ruta para el home
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.nuevoProyecto
    );

    //Listar Proyecto
    router.get('/proyecto/:url', proyectosController.proyectoPorUrl);

    return router;
}

