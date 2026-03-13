const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/posts');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'REST API Blog is running' });
});

module.exports = app;