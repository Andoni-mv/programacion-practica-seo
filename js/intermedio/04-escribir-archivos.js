const fs = require('fs');
const path = require('path');

const inputObj = require('./03-leer-archivos').inputObj;

inputObj['exportado'] = true;

// escribir archivos
const rutaE = path.join(__dirname, '/archivos/output.json')

fs.writeFileSync(rutaE, JSON.stringify(inputObj,' ', 2), 'utf8');