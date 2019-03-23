

const yargs = require('yargs')
const getNotes = require('./notes.js')


// // take command line args node app.js args1 args2 etc
// const command = process.argv[2]

// creates a new command called
//  add whose decribe prop describes what the command does

yargs.command({
    command : 'add',
    describe : 'Add a new note',
    handler : function(){
        console.log('adding a new note')
    }
})

yargs.command({
    command : 'remove',
    describe : 'Removes an old note',
    handler : function(){
        console.log('removing an old note')
    }
})

yargs.command({
    command : 'list',
    describe : 'lists all the notes',
    handler : function(){
        console.log('listing all the notes')
    }
})

yargs.command({
    command : 'read',
    describe : 'reads an old note',
    handler : function(){
        console.log('reading an old note')
    }
})

// node app.js --help run this command to check and test the functionality
console.log(yargs.argv)













// if(command === 'add'){
//     console.log('add notes');
// }else if(command ==='remove') {
//     console.log('remove notes');
// }

// file write synchronous example
// const fs = require('fs')
// fs.writeFileSync('notes.txt','This is a sample text file');


// sharing functions between files example
// const shareThis = require('./utils.js') // ./ goes to root folder ie notes app
// console.log(shareThis(5.09,6));

// // fs.appendFileSync('notes.txt',"\n this has been appended");
// // time to get notes

// console.log(getNotes());

// use npm init or npm install to load external dependencies into your project
// const mychalk = require('chalk')
// console.log(mychalk.green('Success'))
// console.log('cool thing')


// usage for validator module from npm
// const validator = require('validator')
// console.log(validator.isEmail('nikhilchaudhary2903@gmail.com'))
// console.log(validator.isURL('nikhilchaudhary2903@/gmail.com'))