const express = require('express');
const cookieParser = require('cookie-parser');

const port = 8080;
const app = express();

app.use(cookieParser());

app.get('/login', (req, res) => {
    const { name } = req.query;
    if (name) {
        res.cookie('name', name);
        res.send(`Hello, ${name}!`)
    } else res.send('Provide a name to proceed.')
})

app.get('/hello', (req, res) => {
    const name = req.cookies.name;
    if (name) res.send(`Welcome, ${name}!`)
    else res.send(`Hello! Please log in to proceed.`)
})

app.listen(port, () => {
    console.log(`Express listening on port ${port}.`)
})