const mongoose = require('mongoose');

const userNoteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
})

const UserNoteModule = mongoose.model('UserNote', userNoteSchema)

module.exports = UserNoteModule