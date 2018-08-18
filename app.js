/**
 * Created by RJB on 22/06/2018.
 */
//Create a file by appending
//Third part / Node modules
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;

//Own made modules
const notes = require('./notes.js');

console.log('yargs', argv);
console.log('***********************************************');
//var command = process.argv[2];
var command = argv._[0];


console.log('Command', command);
console.log('***********************************************');
if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created');
        notes.logNote(note);
    } else  {
        console.log('Note title taken');
    }
} else if (command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note Found');
        notes.logNote(note);
    }else {
        console.log('Note not found');
    }
} else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}
