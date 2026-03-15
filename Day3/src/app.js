//server create 
const express = require('express')
const UserNoteModele = require('./modules/userNotes')
const app = express()
//middleware with configuration
app.use(express.json())


app.post('/notes', async (req, res) => {

    try {
        const { title, content } = req.body

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' })
        }

        const newNote = new UserNoteModele({ title, content })
        await newNote.save()
        res.status(201).json({ message: 'Note created successfully', note: newNote })

    } catch (err) {
        console.error('Error creating note:', err.message)
        res.status(500).json({ error: 'Internal server error' })    
    }

})

app.get('/notes', async (req, res) => {
    try {
        const notes = await UserNoteModele.find()
        res.status(200).json(notes) 
    } catch (err) {
        console.error('Error fetching notes:', err.message)
        res.status(500).json({ error: 'Internal server error' })    
    }
})



module.exports = app