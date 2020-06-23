const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('minesweeper');
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT  || 3005;
console.log(port);
app.listen(port, () => {
    console.log('App running');
});