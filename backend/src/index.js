const express = require('express');
const app = express();
require('./database');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());

/* API */
app.use('/api', require('./routes/index.js'))

/* Carpeta pública */
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000);
console.log('Server on port 3000');
