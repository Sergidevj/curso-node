const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js')
const colors = require('colors')
console.clear


crearTabla( argv.m , argv.l, argv.h)
.then(nameFile => console.log( nameFile, 'Creado'.green))
.catch(err => console.log(err))



// console.log(process.argv);
// console.log(argv);

// console.log(argv.m, argv.l);

// const [, ,arg3 = 'multiplicacion=5'] = process.argv;
// const [, multiplicacion] = arg3.split('=');

// const multiplicacion = 5