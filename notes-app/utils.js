console.log('utils.js');

// if we try to access this var in antoher file you wont be able to access
// since scope is local to the file
const name = 'Nikhil'

// use module.exports what we want to share with outside world  name variable def above
// module.exports = name

/// how to share functions across files

const fun = function(a,b) {
    return a+b;
}

module.exports = fun