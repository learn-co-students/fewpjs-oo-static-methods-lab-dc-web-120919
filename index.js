class Formatter {
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence){
    let reservedWords = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    let result = [];
    let wordArray = sentence.split(' ');

    for(let i=0; i<wordArray.length; i++){

      if(i===0){
        result.push(this.capitalize(wordArray[i]));
      }
      else{

        if(reservedWords.includes(wordArray[i])){
          result.push(wordArray[i])
        }
        else{
          result.push(this.capitalize(wordArray[i]));
        }
      }
    }
    return result.join(' ');
  }
}