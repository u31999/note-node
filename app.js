console.log('Starting app.js')

const fs = require('fs')

const _ = require('lodash')
// local module
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