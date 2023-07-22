'use strict'

const Product = require('../models/product');

const controller = {
    getProducts: (req, res) => {
        //Find
        Product.find({}).then((products) => {

            // código de manejo de resultados

            if (!products) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar !!'
                });
            }
            return res.status(200).send({

                status: 'success',
                products
            })
        }).catch((err) => {
            // código de manejo de errores

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos !!'
                });
            }
        });

    },
    getPot: (req, res) => {
        //Find
        Product.find({ category: 'pot' }).then((products) => {

            // código de manejo de resultados

            if (!products) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar !!'
                });
            }
            return res.status(200).send({

                status: 'success',
                products
            })
        }).catch((err) => {
            // código de manejo de errores

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos !!'
                });
            }
        });

    },
    getCompras: (req, res) => {
        const { compra } = req.body;
        // Aquí deberías guardar los datos de compra y envío en una base de datos o archivo, según tus necesidades
        // Por ejemplo, podrías utilizar una base de datos MongoDB o guardar los datos en un archivo JSON.
        // También puedes realizar cualquier otra lógica que necesites antes de guardar los datos.

        // Envía una respuesta al frontend para indicar que la compra se ha guardado correctamente.
        res.status(200).json({ message: 'Compra guardada exitosamente' });
    }




}; //end controller


module.exports = controller;