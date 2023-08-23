const mongoose= require ('mongoose');
const Schema= mongoose.Schema;



const ProductSchema= Schema({
    producto:String,
    cantidad: String,
    precio: Number,
        
});



module.exports= mongoose.model('Compra', ProductSchema);

// Products ---> guarda documentos de este tipo y con la estructura dentro de la coleccion
