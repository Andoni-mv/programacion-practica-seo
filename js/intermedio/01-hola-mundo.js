const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Quien eres?\n', name => {
  console.log(`Hola ${name}!`);
  readline.close();
});

// prompt()