const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requests');

// Ruta para crear una solicitud
router.post('/', requestController.createRequest);

module.exports = router;