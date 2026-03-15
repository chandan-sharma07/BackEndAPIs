//create schema for database 
const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true, 
        trim: true
    },
    content:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        min: 0
    }
},
{
    Timestamps: true
})

const noteModel1 = mongoose.model("NoteNew", noteSchema)
module.exports = noteModel1