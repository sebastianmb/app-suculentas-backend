const Compra = require('../models/compra');

const controller = {
  getCompras: (req, res) => {
    const compras = req.body.compra; // Suponiendo que los datos de compra están en un array llamado "compra" en el cuerpo de la solicitud

    // Verifica que existan datos en el array de compras
    if (!Array.isArray(compras) || compras.length === 0) {
      return res.status(400).json({ error: 'No se encontraron datos de compra' });
    }

    // Crea un array para almacenar las promesas de guardar cada compra
    const promises = [];

    // Procesa cada producto en el array de compras
    compras.forEach((producto) => {
      // Crea una nueva instancia del modelo de compra con los datos recibidos
      const nuevaCompra = new Compra({
        producto: producto.name,
        cantidad: producto.quantity,
        precio: producto.price,
      });

      // Guarda la compra en la base de datos y agrega la promesa al array
      promises.push(nuevaCompra.save());
    });

    // Espera a que todas las promesas de guardar finalicen
    Promise.all(promises)
      .then(() => {
        // Envía una respuesta al frontend para indicar que las compras se han guardado correctamente.
        res.status(200).json({ message: 'Compras guardadas exitosamente' });
      })
      .catch((error) => {
        // Maneja cualquier error al guardar las compras
        console.error('Error al guardar las compras:', error);
        res.status(500).json({ error: 'Error al guardar las compras' });
      });
  },
};

module.exports = controller;