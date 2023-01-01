const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const notes = require('./data/notes/notes')

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send(notes)
})

app.get('/api/note/:id',(req,res)=>{
    const id = req.params.id;
    const note = notes.filter((note)=>note._id === id)
    res.send(note)
})

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
