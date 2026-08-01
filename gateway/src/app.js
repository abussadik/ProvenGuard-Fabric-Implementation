const express = require('express');
const app = express();
app.use(express.json());
app.get('/gateway/status', (req, res) => res.json({ status: 'ACTIVE' }));
module.exports = app;
