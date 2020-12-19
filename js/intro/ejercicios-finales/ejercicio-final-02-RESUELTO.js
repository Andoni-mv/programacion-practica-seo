// 2. Añade un parámetro a la función para poder pasarle un listado de stopwords. 
//   slugify(texto, ['de','que','los'])
//   Ejemplos:
//   * ' que significan los sueños' --> '/significan-suenos'
//   * 'qué hacer después de programar' --> '/hacer-despues-programar'


const mapping = {
  '-': [' ','/','_',',',':',';'],
  'a': ['à','á','ä','â'],
  'e': ['è','é','ë','ê'],
  'i': ['ì','í','ï','î'],
  'o': ['ò','ó','ö','ô'],
  'u': ['ù','ú','ü','û'],
  'n': ['ñ'],
  'c': ['ç']
}

function slugify(str,stopwords) {
  let letters = str.toLowerCase();

  if(stopwords) {
    stopwords.forEach(stopword => {
        letters = letters.replace(` ${stopword} `, ' ')
    });
  }

  letters = letters.split('');

  const goodLetters = letters.map(letter => {
    for (const [key, value] of Object.entries(mapping)) {
      if(value.includes(letter)) {
        return key;
      }
    }
    return letter;
  })

  return goodLetters
    .join('')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
    .trim()
}
