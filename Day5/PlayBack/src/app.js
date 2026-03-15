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

app.get('/api/notes', async (req, res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message:"Notes fetched successfully",
        notes
    })
})

app.delete('/api/notes/:id', async (req, res) => {

    try {

        const id = req.params.id

        const note = await noteModel.findByIdAndDelete(id)

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            })
        }

        res.status(200).json({
            message: "Note deleted successfully",
            data: note
        })

    } catch (error) {

        res.status(500).json({
            message: "Server error",
            error: error.message
        })

    }

})

//Single update karna 
app.patch('/api/notes/:id', async (req, res) => {
    try{
        const id = req.params.id
        const {price} = req.body

        const update = await noteModel.findByIdAndUpdate(id, {price})

        res.status(200).json({
            message: "Note is updated successfully"
        })
    } catch(err) {
        res.status(500).json({
            message: "Server error",
            error: err.message
        })
    }
})


module.exports = app