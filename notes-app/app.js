
// usage for validator module from npm
// const validator = require('validator')
// console.log(validator.isEmail('nikhilchaudhary2903@gmail.com'))
// console.log(validator.isURL('nikhilchaudhary2903@/gmail.com'))

const getNotes = require('./notes.js')
// use npm init or npm install to load external dependencies into your project
const mychalk = require('chalk')

// console.log(mychalk.green('Success'))
// console.log('cool thing')

// take command line args
const command = process.argv[2]

if(command === 'add'){
    console.log('add notes');
}else if(command ==='remove') {
    console.log('remove notes');
}















// file write synchronous example
// const fs = require('fs')
// fs.writeFileSync('notes.txt','This is a sample text file');


// sharing functions between files example
// const shareThis = require('./utils.js') // ./ goes to root folder ie notes app
// console.log(shareThis(5.09,6));

// // fs.appendFileSync('notes.txt',"\n this has been appended");
// // time to get notes

// console.log(getNotes());
