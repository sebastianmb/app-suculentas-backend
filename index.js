'use strict'
const url = 'mongodb://localhost:27017/suculentas';
const mongoose = require('mongoose');
const app =require('./app');
const port= 3900;



mongoose.Promise=global.Promise;
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => {
        console.log('Conexión exitosa a la base de datos !!');
        //Crear servidor y ponerme a escuchar peticiones http
        app.listen(port,()=>{
            console.log('Servidor corriendo en http://localhost:'+port);
        });

    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });