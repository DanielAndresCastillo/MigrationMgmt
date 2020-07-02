const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyparser =require('body-parser');
const expressValidator = require('express-validator');


//Helpers con algunas funciones
const helpers = require('./helpers');

//Crear la conexión a la BD
const db = require('./config/db');

//Importar el modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

//Crear app de express
const app = express();

//Donde cargar los archivos estaticos
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));



//Habilitamos PUG
app.set('view engine', 'pug');

//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//Pasar var dump a la aplicación
app.use((req, res, next) => {
    res.locals.year = 2019;
    res.locals.vardump = helpers.vardump;
    next();
});

//Habilitamos el bodyparser para leer datos del formulario
app.use(bodyparser.urlencoded({extended: true}));

app.use('/',routes());

app.listen(7000);