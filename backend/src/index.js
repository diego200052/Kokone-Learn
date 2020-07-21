const express = require('express');
const app = express();
require('./database');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/index.js'))

app.listen(3000);
console.log('Server on port 3000');
