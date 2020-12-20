# imports
import os

fileDir = os.path.dirname(__file__)
filePath = os.path.join(fileDir, 'archivos/input.csv')
print(filePath)

# leer
f = open(filePath, 'r')
print(f.read())

# escribir
f2 = open(filePath, 'a')
f2.write('\naltavoz,7')
f2.close()

print(type(f.read()))