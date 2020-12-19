// Iteración en Arrays
const arr = [1,2,3,4,5,6,7];

  // For
  for(let index = 0; index < arr.length; index++) {
    console.log(arr[index]) //arr[0] -> 1
  }

  for(let item of arr) {
    console.log(item)
  }

  // While
  let x = 0;
  const y = 10;
  do {
    // logica que se ejecuta primero
    console.log(x)
    x++;
  } while (x < y)

  while (x > y) {
    //se ejecuta si se cumple la condicion
  }

  // Metodos
  arr.forEach(item => console.log(item))

  arr.map(item => item + 1)

  arr.filter(item => item > 5)

  arr.reduce((acc, actual) => acc + actual)

// Iteración en Objetos
const miObj = {
  title: '',
  slug: '/url-1',
  indexable: true,
  h1: 'h1 de la url 1',
  h2: [
    'lorem',
    'ipsum',
    'dolor'
  ],
  inlinks: 24
}

  // for 
  for (let key in miObj) {
    console.log(miObj[key])
  }

  // Object
  const keys = Object.keys(miObj)
  const values = Object.values(miObj)
  const entries = Object.entries(miObj)