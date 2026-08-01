const express = require('express');
const app = express();
app.use(express.json());
app.post('/store', (req, res) => res.json({ stored: true, cid: 'QmEvidenceHashExample' }));
app.listen(3002, () => console.log('Evidence store on port 3002'));
