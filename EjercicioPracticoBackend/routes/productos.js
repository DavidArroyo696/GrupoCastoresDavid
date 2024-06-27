// routes/productos.js
const express = require('express');
const router = express.Router();
const connection = require('../db');

// Obtener todos los productos
router.get('/productos', (req, res) => {
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Obtener un producto por id
router.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM productos WHERE idProducto = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(results[0]);
  });
});

// Crear un nuevo producto
router.post('/productos', (req, res) => {
  const { nombreProducto, precio, estatus } = req.body;
  connection.query('INSERT INTO productos (nombreProducto, precio, estatus) VALUES (?, ?, ?)', [nombreProducto, precio, estatus], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId });
  });
});

// Actualizar un producto
router.put('/productos/:id', (req, res) => {
    const { id } = req.params;
    const { nombreProducto, precio, estatus } = req.body;
  
    // Crear una lista de campos y valores dinámicamente
    const fields = [];
    const values = [];
  
    if (nombreProducto !== undefined) {
      fields.push('nombreProducto = ?');
      values.push(nombreProducto);
    }
    if (precio !== undefined) {
      fields.push('precio = ?');
      values.push(precio);
    }
    if (estatus !== undefined) {
      fields.push('estatus = ?');
      values.push(estatus);
    }
  
    // Agregar el id al final de los valores
    values.push(id);
  
    // Verificar si hay campos para actualizar
    if (fields.length === 0) {
      return res.status(400).json({ message: 'No hay campos para actualizar' });
    }
  
    // Construir la consulta dinámica
    const query = `UPDATE productos SET ${fields.join(', ')} WHERE idProducto = ?`;
  
    connection.query(query, values, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: 'Producto actualizado' });
    });
  });
  

// Eliminar un producto
router.delete('/productos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM productos WHERE idProducto = ?', [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Producto eliminado' });
  });
});

module.exports = router;
