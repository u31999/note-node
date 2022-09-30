console.log('Starting notes.js')

const addNote = (title, body) => {
    console.log('Adding note: ', `[ ${title} : ${body} ]`)
}

const getAll = () => {
    console.log('Get All notes')
}

const getNote = (title) => {
    console.log('getNote ', title)
}

const removeNote = (title) => {
    console.log('Remove ', title)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}