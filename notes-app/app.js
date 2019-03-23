
// const fs = require('fs')
// fs.writeFileSync('notes.txt','This is a sample text file');

// fs.appendFileSync('notes.txt',"\n this has been appended");
const getNotes = require('./notes.js')
const shareThis = require('./utils.js') // ./ goes to root folder ie notes app
console.log(shareThis(5.09,6));

// time to get notes

console.log(getNotes());