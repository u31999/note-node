const fs = require('fs')

const logNote = (note) => {
        console.log(`--`.yellow)
        console.log('Title: '.green, note.title.yellow)
        console.log('Body: '.green, note.body.yellow)
}

const fetchNotes = () => {
    try {
        let noteString = fs.readFileSync('data/notes-data.json')
        return JSON.parse(noteString)
    } catch(err) {
        return []
    }
}
const saveNotes = (notes) => {
     fs.writeFileSync('data/notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
    let notes = fetchNotes()
     let note = { title , body }
    const duplicateNote = notes.filter(note => note.title === title) 

    if (duplicateNote.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note
    }
    
}

const getAll = () => {
    return fetchNotes()
}

const getNote = (title) => {
    let notes = fetchNotes()
    let foundNote = notes.filter(note => note.title === title)
    
    return foundNote[0]
}

const removeNote = (title) => {
    let oldNotes = fetchNotes()
    let newNotes = oldNotes.filter(note => note.title !== title )
    saveNotes(newNotes)

    return oldNotes.length !== newNotes.length
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}