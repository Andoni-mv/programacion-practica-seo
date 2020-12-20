# Ejercicio final 01

# Crea un script que abra un listado de páginas de internet al ejecutarse

import webbrowser

urls = [
    'https://mail.google.com/mail/#inbox',
    'https://www.notion.so/',
    'https://drive.google.com/drive/my-drive',
    'https://analytics.google.com/',
    'https://calendar.google.com/calendar/r?pli=1',
    'https://search.google.com/search-console'
]

for url in urls:
	webbrowser.open_new(url)
