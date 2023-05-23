// server logic

// How to run a server:
// -> npm install
// -> node app.js

const express = require('express'),
    app = express();

const hostname = 'localhost';
const port = 3500;

app.get("/api/users?", (req, res) => {
    res.status(200).type('text').send("List of users!");
});
app.get("/api/contacts", (req, res) => {
    res.status(200).type('text').send("List of contacts!");
});
app.post("/api/users/:name/:surname", (req, res) => {

    const name = req.params.name;
    const surname = req.params.surname;
    res.status(200).type('text').send(`User ${name} ${surname} was created! (params)`);
});
app.post("/api/users", (req, res) => {

    const name = req.query.name;
    const surname = req.query.surname;
    res.status(200).type('text').send(`User ${name} ${surname} was created! (query)`);
});
app.get('/api/users/random', (req, res) => {
    res.status(200).type('json');
    res.json({
        id: 1,
        name: 'Bob',
        surname: 'Arum',
        age: 90
    });
})

app.use((req, res, next) => {
    res.status(404).type('text').send("Page Not Found!");
})

app.listen(port, hostname, () => {
    console.log(`Server is listening http://${hostname}:${port}`);
});
