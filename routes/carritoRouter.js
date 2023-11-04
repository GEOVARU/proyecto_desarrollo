const express = require('express');
const router = express.Router();

const verifyToken = require('../auth/authMiddleware');
const { getCart, updateCartItem, deleteCartItem, AgregarProductoCarrito }  = require('../controller/carritoController');

router.get('/carrito', verifyToken, getCart);
router.post('/carrito/add', verifyToken, AgregarProductoCarrito);

router.post('/carrito', verifyToken, updateCartItem);

router.delete('/carrito', verifyToken, deleteCartItem);

module.exports = router;
