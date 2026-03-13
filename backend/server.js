require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`REST API Blog server running on port ${PORT}`);
});