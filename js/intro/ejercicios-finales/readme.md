# Ejercicios finales JS básico
1. Crea una función llamada slugify que transforme un string (input) en una URL amigable para SEO (output). 
slugify(texto)
Caracteres que se pueden tener en cuenta: àáäâèéëêìíïîòóöôùúüûñç·/_,:;
Ejemplos:
  * ' que significan los sueños' --> '/que-significan-los-suenos'
  * 'qué hacer después de programar' --> '/que-hacer-despues-de-programar'

2. Añade un parámetro a la función para poder pasarle un listado de stopwords. 
  slugify(texto, ['de','que','los'])
  Ejemplos:
  * ' que significan los sueños' --> '/significan-suenos'
  * 'qué hacer después de programar' --> '/hacer-despues-programar'

3. He guardado el archivo `urls-ejercicio-final-03` en una variable para poder trabajar con el.
  Vamos a:
  * Localizar cuantos tipos de valores existen en el atributo `robots`
  * Encuentra que slug tiene como valor en el robots: `aqui tenía que haber otra cosa no? :P`
  * Contabiliza cuantas urls se pueden indexar y cuantas no

Extra:
* El vídeo resolviendo el primer ejercicio tiene un bug en el código que se emplea para poder realizar un ejercicio de debugging. Tenlo en cuenta a la hora de consumir dicho vídeo.
  