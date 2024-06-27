// routes/login.js
const express = require('express');
const router = express.Router();
const connection = require('../db');

router.post('/login', (req, res) => {
  const { correo } = req.body;
  connection.query('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(results[0]);
  });
});

module.exports = router;
