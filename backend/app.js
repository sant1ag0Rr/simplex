const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');
const requestRoutes = require('./routes/requests');
const forumRoutes = require('./routes/forum'); // <-- Solo una declaración
const chatRoutes = require('./routes/chat');

const app = express();
app.use(cors());
app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/forum', forumRoutes); // <-- Solo una declaración
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));