//   1. Promisifica la función de fs.readFile para poder acceder a archivos a través de promesas.
//    (Importante hacer el ejercicio de consultar la documentación primero y sino buscarlo en Google).

const fs = require('fs');
const util = require('util');

const readFilePromisified = util.promisify(fs.readFile);

module.exports = {
    readFilePromisified
  }