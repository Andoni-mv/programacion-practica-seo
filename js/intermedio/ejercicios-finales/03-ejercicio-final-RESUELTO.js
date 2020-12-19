// 3. Importa la función anterior y parsea el csv usando un modulo de node 
// (https://www.npmjs.com/package/neat-csv) y haz todo el proceso de instalación, 
// require y ejecución con el objetivo final de mostrarlo en consola.

const neatCsv = require('neat-csv');
const path = require('path');
const read = require('./02-ejercicio-final-RESUELTO.js');

async function readCSV() {
  const data = await read(path.join(__dirname, '../archivos/ejercicio.csv'));
  const csvFile = await neatCsv(data);
  console.log(csvFile);
}

readCSV();