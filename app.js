console.log('Starting app.js')

const fs = require('fs')

// Lodash module : utility library for node.js 
const _ = require('lodash')

// Yargs module: A node.js model make work with argv simple
const yargs = require('yargs')

// Local module
const notes = require('./notes.js')

let argv = yargs.argv
let command = argv._[0]

console.log(command)
console.log(argv)

if(command === 'add') {
    notes.addNote(argv.title, argv.body)
} else if(command === 'list') {
    notes.getAll()
}else if(command === 'read') {
    notes.getNote(argv.title)
} else if(command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('Command not recognized')
}