"use strict"
const mongoose = require("mongoose")


// Note schema 
const noteSchema = new mongoose.Schema({
    title: {type: String},
    content: {type: String, required:true},
    createdAt:{type: Date, default: Date.now},
    updatedAt:{type: Date, default:Date.now},
    color{type: String}
})

const Note = mongoose.model('Note', noteSchema)

module.exports= Note