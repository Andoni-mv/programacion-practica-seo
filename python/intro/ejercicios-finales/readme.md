# Ejercicios finales Python básico

El ejercicio principal constará en repetir el ejercicio 1 y 2 que vimos en el módulo de JS básico pero con la sintaxis de Python.

## Importante: 
No habrá vídeo solucionandolo ya que ya hemos visto como hacerlo a nivel conceptual. Al ser un ejercicio de pura adaptación de sintaxis sí que podéis consultar la solución en sus archivos correspondientes

## Ejercicios

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
