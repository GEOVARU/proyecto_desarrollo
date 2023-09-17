const express = require('express');
const verifyToken = require('../auth/authMiddleware');
const { registerUser, loginUser, getUsuarios, getProfile, updateProfile, deleteProfile } = require('../controller/usuarioController');


const router = express.Router();

router.post('/registro/:DPI', registerUser);
router.post('/login', loginUser);

router.get('/usuarios/', verifyToken, getUsuarios);
router.get('/perfil/:DPI', verifyToken, getProfile);
router.post('/perfil/:DPI', verifyToken, updateProfile);
router.delete('/perfil/:DPI', verifyToken, deleteProfile);

module.exports = router;
