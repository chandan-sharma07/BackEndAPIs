const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

const port = 3000;

const notes = [
    
]

app.post('/notes', (req, res) => {
    console.log(req.body)
    notes.push(req.body);
    res.send(`Note is created.`);
});

app.get('/notes', (req, res) => {
    res.send(notes);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})