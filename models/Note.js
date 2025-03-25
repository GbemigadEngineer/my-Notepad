"use strict"
const mongoose = require("mongoose")


// Note schema 
const noteSchema = new mongoose.Schema({
    title: {type: String},
    content: {type: String, required:true},
    createdAt:{type: Date, default: Date.now},
    updatedAt:{type: Date, default:Date.now},
    color:{type: String}
}, {timestamps:true})



// Automatically update `updatedAt` on save
noteSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
  });


// Methods for handling CRUD OPERATIONS in the database
// Get all notes
noteSchema.statics.getAllNotes = async function(){
    return await this.find().sort({createdAt: -1})
}
// create a note

noteSchema.statics.createNote = async function (noteData){
    return await this.create(noteData)
}
// get note by id
noteSchema.statics.getNoteById = async function(id){
    return await this.findById(id)
}
// update a note of course the note would have an id
noteSchema.statics.updateNote = async function (id, updatedData){
    return await this.findByIdAndUpdate(id, updatedData, {new:true, runValidators:true})
}

// delete a note of course that note would have an id
noteSchema.statics.deleteNote = async function (id){
    return await this.findByIdAndDelete(id)
}
//   Note model
const Note = mongoose.model('Note', noteSchema)

module.exports= Note