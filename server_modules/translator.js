const ot = require('./constants/old-testament.json');
const nt = require('./constants/new-testament.json');
const bofm = require('./constants/book-of-mormon.json');
const dc = require('./constants/doctrine-and-covenants.json');
const pgp = require('./constants/pearl-of-great-price.json');

module.exports = {

  /**
   * @method prepareForScrape this changes the query string to its abbreviated form
   * @param {string} reference.work the work of the scripture reference
   * @param {string} reference.book the book of the scripture reference
   * @param {number} reference.chap the chapter of the scripture reference
   * @param {number} reference.vers the verse of the scripture reference
   */

  prepareForScrape: (reference) => {
    [ot, nt, bofm, dc, pgp].forEach((work, i) => {
      if (work.hasOwnProperty(reference.book)) {
        reference.book = work[reference.book];
        i === 0 ? reference.work = 'ot' : reference.work;
        i === 1 ? reference.work = 'nt' : reference.work;
        i === 2 ? reference.work = 'bofm' : reference.work;
        i === 3 ? reference.work = 'dc-testament' : reference.work;
        i === 4 ? reference.work = 'pgp' : reference.work;
      }
    });
    return reference;
  },

  /**
   * @method prepareForScrape this changes the reference for display on client
   * @param {string} reference.work the work of the scripture reference
   * @param {string} reference.book the book of the scripture reference
   * @param {number} reference.chap the chapter of the scripture reference
   * @param {number} reference.vers the verse of the scripture reference
   */

  prepareForClient: (reference) => {
    [ot, nt, bofm, dc, pgp].forEach((work, i) => {
      for (var prop in work) {
        if (work[prop] === reference.prevBook) {
          reference.prevBook = prop;
        }
        if (work[prop] === reference.nextBook) {
          reference.nextBook = prop;
        }
      }
    });
    return reference;
  }

}
