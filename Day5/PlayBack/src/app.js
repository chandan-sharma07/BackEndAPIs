const express = require("express")
const noteModel = require("./models/note.model")
const noteModel1 = require("./models/lib.model")

const app = express()
app.use(express.json())

app.post('/api/notes', async (req, res) => {
    const {title, content, price} = req.body

    await noteModel.create({
        title, content, price
    })

    res.status(201).json({
        message: "Notes created successfully"
    })
})



app.post('/api/note/new', async (req, res) => {
    const {title, content, price} = req.body

    await noteModel1.create({
        title, content, price
    })

    res.status(201).json({
        message: "Notes created successfully"
    })
})

module.exports = app
