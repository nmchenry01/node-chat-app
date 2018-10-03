const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const PORT = 3000

const app = express();

app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`)
})