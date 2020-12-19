// Declaración y ejecución
nombreDeLaFuncion(argumentos);

function nombreDeLaFuncion(parametros) {
  // logica de la función
  return result;
}


// Hoisting
  // Primero se lee el archivo entero y localiza todas las funciones para añadirlas "arriba de todo"
  // Se puede acceder a una función antes de declararla por este comportamiento


// Tipos de funciones

  // Anonymous function
  const anon = function (parametro) {
    return 'soy anónima'
  }
  
  anon();

  // Function expression
  function nonAnon(parametros) {
    const result = parametros
    return result;
  }

  nonAnon();

  // Arrow function ES6
  const por2 = parametro =>  parametro * 2;

  const por3 = numero => {
    return numero * 3;
  }


  // IIFE - Immediately Invoked Function Expression
  (function() {
    console.log('hola mundo')
  })();

// Métodos
console.log()
'hola'.replace('h','') // ola

