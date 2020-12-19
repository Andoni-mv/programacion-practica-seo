// 3. He guardado el archivo `urls-ejercicio-final-03` en una variable para poder trabajar con el.
//   Vamos a:
//   * Localizar cuantos tipos de valores existen en el atributo `robots` y sumar cuantos hay de cada uno
//   * Encuentra que slug tiene como valor en el robots: `aqui tenía que haber otra cosa no? :P`
//   * Contabiliza cuantas urls se pueden indexar y cuantas no

// En esta variable `listaDeUrls` esta el archivo cargado, haz un console.log para ver que contiene ^^
console.log(listaDeUrls)

// * Localizar cuantos tipos de valores existen en el atributo `robots` y sumar cuantos hay de cada uno
const robotsValues = {};

listaDeUrls.forEach(url => {
  if(robotsValues[url.robots]) {
    robotsValues[url.robots]++
  } else {
    robotsValues[url.robots] = 1;
  }
})

console.log(robotsValues)

//   * Encuentra que slug tiene como valor en el robots: `aqui tenía que haber otra cosa no? :P`
const slugFiltered = listaDeUrls.find( url => url.robots === 'aqui tenía que haber otra cosa no? :P')
console.log(slugFiltered)

//   * Contabiliza cuantas urls se pueden indexar y cuantas no

const result = listaDeUrls
  .filter( url => !url.robots.includes('noindex') && !url.robots.includes('aqui tenía que haber otra cosa no? :P'))
  .length;

console.log(result)