// 2. Con la función promisificada, importala y consulta el archivo ejercicio. 
// Para hacerlo crea una función llamada read() y exportala

const { readFilePromisified } =  require('./01-ejercicio-final-RESUELTO');
const path = require('path');

module.exports = async function read(path) {
  const data = await readFilePromisified(path, 'utf-8');
  return data;
}
