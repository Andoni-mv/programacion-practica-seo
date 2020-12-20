# String
ejemplo = 'Esto es un texto'

minus = ejemplo.lower()
print(minus)

strlist = ejemplo.split(' ')
print(strlist)

rpl = ejemplo.replace('texto','ejemplo')
print(rpl)

# Iterables / Lists
inc = 'ejemplo' in strlist # false
print(inc)

largo = len(strlist) # 4

duplicated = strlist.copy()
print(duplicated)

strlist.append('de')
print(strlist)

strlist.remove('Esto')
print(strlist)