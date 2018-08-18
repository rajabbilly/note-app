/**
 * Created by Rajab Enock on 24/06/2018.
 */

// var obj = {
//     name : 'Rajab',
//     age : 27
// };
//
// var stringObj = JSON.stringify(obj); //Converting an object into JSON String
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log('*********************************************************************************************');


// let personString = '{"name": "Rajab","age" :25}'; //Converting from a JSON string to an Object
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
// console.log(person.age);


const fs = require('fs');

let originalNoteObj = {
    title : 'Some title',
    body : 'Some body'
};

let originalNoteString = JSON.stringify(originalNoteObj);
//Write to file
fs.writeFileSync('notes.json', originalNoteString);

let noteStringFromFile = fs.readFileSync('notes.json');
let note = JSON.parse(noteStringFromFile);
console.log(typeof note);
console.log(note.title);
