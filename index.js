class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let results = []
    let arrayOfWords = str.split(' ')
    for (var i = 0; i < arrayOfWords.length; i++) {
      if (i == 0) {
        results.push( this.capitalize( arrayOfWords[i] ))
      } else {
        if (exceptions.includes( arrayOfWords[i] )) {
          results.push( arrayOfWords[i] )
        } else {
          results.push( this.capitalize( arrayOfWords[i] ))
        }
      }
    }
    return results.join( " " )
}
}
