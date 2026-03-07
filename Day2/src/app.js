/* 
Server ko create karna, aur usko start karna.
Aur server ko configure karna, jaise ki body parser, cors, etc.
*/
import express from 'express'
const app = express()

//configuring the server
app.use(express.json())

const notes = []

//Logic
app.get('/',(req,res)=>{
    res.send('Hello World! Welcome to my server.')
})

// Post request to create a note
app.post('/notes', (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    res.send('Note received')
})

// Get request to fetch all notes
app.get('/notes', (req, res) => {
    res.json(notes)
    res.send(notes)
})

// Delete request to delete a note by index
app.delete('/notes/:index', (req, res) => {

    const index = parseInt(req.params.index)

    if (isNaN(index)) {
        return res.status(400).json({ error: "Invalid index" })
    }

    if (index >= 0 && index < notes.length) {

        notes.splice(index, 1)

        return res.json({
            message: "Note deleted successfully"
        })

    } else {

        return res.status(404).json({
            error: "Note not found"
        })
    }

})

// Update request to update a note by index
app.put('/notes/:index', (req, res) => {    
    const index = parseInt(req.params.index)

    if (isNaN(index)) {
        return res.status(400).json({ error: "Invalid index" })
    }
    if (index >= 0 && index < notes.length) {
        notes[index] = req.body
        return res.json({
            message: "Note updated successfully"
        })
    } else {

        return res.status(404).json({
            error: "Note not found"
        })
    }
})

// Patch request to update a note by index
app.patch('/notes/:index', (req, res) => {
    const index = parseInt(req.params.index)

    if (isNaN(index)) {
        return res.status(400).json({ error: "Invalid index" })
    }
    if (index >= 0 && index < notes.length) {
        notes[index] = { ...notes[index], ...req.body }
        return res.json({
            message: "Note updated successfully"
        })
    } else {
        return res.status(404).json({
            error: "Note not found"
        })
    }
})

export default app