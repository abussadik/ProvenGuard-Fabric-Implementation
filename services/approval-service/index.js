const express = require('express');
const app = express();
app.use(express.json());
app.post('/approve', (req, res) => res.json({ approved: true, timestamp: new Date().toISOString() }));
app.listen(3001, () => console.log('Approval service on port 3001'));
