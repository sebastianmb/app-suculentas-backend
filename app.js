'use strict';

// Cargar módulos de node para crear el servidor
const express = require('express');
const bodyParser = require('body-parser');





// Ejecutar express (http)
const app = express();
const cors = require('cors');


// Habilitar CORS para todas las solicitudes
app.use(cors());
// Cargar ficheros rutas
const product_router = require('./routes/product');
const compra_router = require('./routes/compra');
const signature_router = require('./routes/signature');


// Middlewares se ejecutan antes de cargar una ruta
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS - Permitir peticiones desde el frontend

// Añadir prefijos a las rutas / cargar rutas
app.use('/api', product_router);
app.use('/api', compra_router);
app.use('/api', signature_router);


// Exportar módulo (fichero actual)
module.exports = app;
