'use strict'

const Product = require('../models/product');

const controller = {
    getProducts: (req, res) => {
        //Find
        Product.find({}).then((products) => {

           // código de manejo de resultados

            if(!products){
                return res.status(404).send({
                    status:'error',
                    message:'No hay articulos para mostrar !!'
                });
            }
            return res.status(200).send({

                status: 'success',
                products
            })
        }).catch((err) => {
            // código de manejo de errores

            if(err){
                return res.status(500).send({
                    status:'error',
                    message:'Error al devolver los articulos !!'
                });
            }
          });
    }


}; //end controller


module.exports = controller;