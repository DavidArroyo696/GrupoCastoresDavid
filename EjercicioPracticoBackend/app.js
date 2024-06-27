// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', require('./routes/login'));
app.use('/api', require('./routes/productos'));
app.use('/api', require('./routes/historico'));

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
