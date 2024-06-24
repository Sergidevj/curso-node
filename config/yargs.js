const { describe } = require('yargs');

const argv = require('yargs')
        .option('m', {
            alias: 'multiplicacion',
            type: 'number',
            demandOption: true,
            describe: "Es la base del numero a multiplicar"
        })
        .option('l',{
            alias: 'lista',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .option('h',{
            alias: 'hasta',
            type: 'Number',
            default: 10,
            describe: 'Muestra el limite de la multiplicacion'
        })
        .check((argv,option) => {
            if(isNaN (argv.m)){
                throw 'La base tiene que ser un numero'
            }
            else{
                return true
            };
        })
        .argv;

module.exports = argv