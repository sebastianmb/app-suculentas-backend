'use strict'
const url = 'mongodb://localhost:27017/suculentas';
const mongoose = require('mongoose');


mongoose.Promise=global.Promise;
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log('Conexión exitosa a la base de datos !!');
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });