const { crearArchivo } = require('./helpers/mulplicar')
const argv = require('./config/yargs')
require('colors');

console.clear();
// console.log(process.argv);
console.log(argv);

crearArchivo( argv.b , argv.l , argv.h )
    .then ( nombreArchivo => console.log( nombreArchivo, 'creado'))
    .catch ( err => console.log( err ));