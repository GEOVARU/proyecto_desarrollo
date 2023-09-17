const mongoose = require('mongoose');

const carritoItemSchema = new mongoose.Schema({
    ProductoID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productos',
        required: true
    },
    Cantidad: {
        type: Number,
        required: true,
        min: 1
    }
});

const carritoSchema = new mongoose.Schema({
    UsuarioID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true,
        unique: true
    },
    Productos: [carritoItemSchema],
    Total: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Carrito', carritoSchema);