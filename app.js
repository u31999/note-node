console.log('Starting app.js')

const fs = require('fs')

// Lodash module : utility library for node.js 
const _ = require('lodash')

// Yargs module: A node.js model to work with argv
const yargs = require('yargs')

// Local module
const notes = require('./notes.js')

let command = process.argv[2]

console.log(command)

if(command === 'add') {
    console.log('Add new note')
} else if(command === 'list') {
    console.log('List all notes')
}else if(command === 'read') {
    console.log('Fetching note')
} else if(command === 'remove') {
    console.log('remove note')
} else {
    console.log('Command not recognized')
}