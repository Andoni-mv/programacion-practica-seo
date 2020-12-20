# variable
x = 300

texto = 'lorem ipsum'

# Global scope
y = 20

# Local Scope
def myFunc():
  x = 30
  print(x)

print(x) # 300
myFunc() # 30