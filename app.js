const colors = require('colors')

// Lodash module : utility library for node.js 
const _ = require('lodash')

// Yargs module: A node.js model make work with argv simple
const yargs = require('yargs')

// Local module
const notes = require('./notes.js')

// Setup argv with yargs
let argv = yargs.command('add', 'Add a new note', {
    title: {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    },
    body: {
        describe: 'The text of the note',
        demand: true,
        alias: 'b'
    }
}).help().argv
let command = argv._[0]



console.log(command)
console.log(argv)

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body)
    if(note) {
        console.log(`Note Created Successfully`.green)
        notes.logNote(note)
    }else{
        console.log('Create note failed!'.toUpperCase(). red)
        console.log('The title is taken'.toUpperCase().red)
    }
} else if(command === 'list') {
    let allNotes = notes.getAll()
    if(allNotes) {
        console.log('All Notes =>'.toUpperCase().green)
        console.log(`Printing ${allNotes.length} notes :`.yellow)
        allNotes.forEach(note => {
            notes.logNote(note)
        })
    }else{
        console.log('you have no notes saved!'.toUpperCase().red)
    }
    
}else if(command === 'read') {
    let note = notes.getNote(argv.title)
    if(note) {
        console.log(`Note Found`.green)
        notes.logNote(note)
    }else{
        console.log('note not found!'.toUpperCase().red)
    }
} else if(command === 'remove') {
    let removed = notes.removeNote(argv.title)
    removed ? console.log('Note Removed Successfully'.green)
            : console.log('Remove failed !\nThe note title is\'t correct'.toUpperCase().red)
    
} else {
    console.log('Command not recognized')
}