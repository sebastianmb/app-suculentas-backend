'use strict'

//Cargar modulos de node para crear el servidor

const express = require('express');
const bodyParser = require('body-parser');

//Ejecutar express (http)
const app= express();


//Cargar ficheros rutas


//Middlewares se ejecuta antes de cargar una ruta
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS permitir peticiones desde el fronted


//Añadir prefijos a las rutas


//Exportar modulo (fichero actual)
module.exports = app;