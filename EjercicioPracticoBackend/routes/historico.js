// routes/historico.js
const express = require('express');
const router = express.Router();
const connection = require('../db');

// Obtener todos los historiales
router.get('/historico', (req, res) => {
  connection.query('SELECT * FROM historico', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Obtener un historial por idUsuario
router.get('/historico/:idUsuario', (req, res) => {
  const { idUsuario } = req.params;
  connection.query('SELECT * FROM historico WHERE idUsuario = ?', [idUsuario], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

module.exports = router;
