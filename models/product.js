'use strict'

const mongoose= require ('mongoose');
const Schema= mongoose.Schema;



const ProductSchema= Schema({
    id: Number,
    category:String,
    stock:Number,
    nombre: String,
    precio: Number,
    cantidad: Number,
    image: String

});


module.exports= mongoose.model('Product', ProductSchema);

// Products ---> guarda documentos de este tipo y con la estructura dentro de la coleccion
