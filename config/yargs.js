const argv = require("yargs")

  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Porfavor la base tiene que ser un numero";
    }
    return true;
    console.log("yargs", argv);
  }).argv;

  module.exports = argv
  