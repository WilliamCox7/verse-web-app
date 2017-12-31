//map of scriptural book names to lds.org abbreviations
const referenceMap = {
  '1 Nephi': '1-ne',
  'Enos': 'enos'
}

module.exports = {

  //this changes the query string to its abbreviated form
  prepareForScrape: (reference) => {
    reference.book = referenceMap[reference.book];
    return reference;
  },

  //this changes the reference for display on client
  prepareForClient: (reference) => {
    for (var prop in referenceMap) {
      if (referenceMap[prop] === reference.prevBook) {
        reference.prevBook = prop;
      }
      if (referenceMap[prop] === reference.nextBook) {
        reference.nextBook = prop;
      }
    }
    return reference;
  }

}
