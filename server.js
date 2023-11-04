const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./routes/productoRoutes');
const cartRoutes = require('./routes/carritoRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());  
mongoose.connect('mongodb+srv://geovanni:alfredo12345@cluster0.7r9nadw.mongodb.net/proyecto_dev', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a la base de datos MongoDB');
    })
    .catch(error => {
        console.error('Error al conectarse a la base de datos: ', error);
    });

app.get('/', (req, res) => {
    res.json({ message: 'Servicios levantados de carrito de compras, Ok' });
});

app.use('/api', usuarioRoutes);
app.use('/api', productoRoutes);
app.use('/api', cartRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
