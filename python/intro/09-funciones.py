# Declarar una función
def fnEjemplo(args):
  # Logica de la funcion
  return

def sum(a,b=2):
  return a + b

# Built-in functions
# print()
# len()


# Ejecutar una funcion
# print(sum(1))


# Default parameter
# def sum(a,b=2):

# *args
def sumAll(*args):
  for i in args:
    print(i)

print(sumAll(1,2,3,4))

# **kwargs
def ejemplo(**kwargs):
  print(kwargs)

print(ejemplo(b=1, a=4, z=34))

# Lambda

x = lambda a : a * 2
print(x(2))
