class Formatter {
  //add static methods here
  static capitalize(str){
    return str.slice(0, 1).toUpperCase() + str.substring(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(title){
    // "where the wild things are" ) ).to.equal( "Where the Wild Things Are" 
    let notCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleArray = title.split(" ")
    // console.log(titleArray)
    let firstWord = this.capitalize(titleArray[0])
    let restOfTitle = []
    let i = 1
    while (i < titleArray.length) {
      if (notCapitalize.includes(titleArray[i])){
        restOfTitle.push(titleArray[i])
      } else {
        restOfTitle.push(this.capitalize(titleArray[i]))
      }
      i++
    }
    // console.log(restOfTitle)
    // console.log(firstWord)
    return firstWord + " " + restOfTitle.join(" ")
  }
}