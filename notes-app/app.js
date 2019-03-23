
const fs = require('fs')
fs.writeFileSync('notes.txt','This is a sample text file');

fs.appendFileSync('notes.txt',"\n this has been appended");
