const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fantasy-football', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

app.listen(3000, () => console.log('Server running on port 3000'));
