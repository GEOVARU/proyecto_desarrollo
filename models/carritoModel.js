// carritoModel.js

const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
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

const cartSchema = new mongoose.Schema({
    UsuarioID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true,
        unique: true
    },
    Productos: [cartItemSchema],
    Total: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Carrito', cartSchema);