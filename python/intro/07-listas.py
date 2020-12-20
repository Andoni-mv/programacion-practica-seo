# Crear listas
listaEjemplo = ['pantalla', 'teclado', 'internet']

# Acceder a un elemento
listaEjemplo[-2]

listaEjemplo[0]

# Rangos
listaEjemplo[0:2]

listaEjemplo[1:]

# Cambiar un elemento
listaEjemplo[1] = 'altavoz'

print(listaEjemplo)

# Loop
for elemento in listaEjemplo:
  print(elemento)

# Chequear si existe
if 'pantalla' in listaEjemplo:
  print('Existe')

# Largo
print(len(listaEjemplo))

# Anadir elementos
listaEjemplo.append('sonido')

print(listaEjemplo)


listaEjemplo.insert(1, 'teclado')
print(listaEjemplo)


# Eliminar elemento
listaEjemplo.remove('teclado')
print(listaEjemplo)

del listaEjemplo[0]

print(listaEjemplo)

# Eliminar lista
# del listaEjemplo
print(listaEjemplo)

# Vaciar la lista
# listaEjemplo.clear()
print(listaEjemplo)

# Unir dos listas
otralista = ['chicles','fruta']

nuevaLista = listaEjemplo + otralista
print(nuevaLista)