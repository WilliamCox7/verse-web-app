const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

/**
 * @method insertScripture creates a new scripture in db
 * @param {string} reference.work the work of the reference
 * @param {string} reference.book the book of the reference
 * @param {number} reference.chap the chapter of the reference
 * @param {number} reference.vers the verse of the reference
 * @param {string} reference.text the verses actual content
 * @param {string} reference.prevBook the book that is before the current book
 * @param {string} reference.nextBook the book that is after the current book
 * @param {number} reference.prevChap the chapter that is before the current chapter
 * @param {number} reference.nextChap the chapter that is after the current chapter
 * @param {number} reference.lastVerse the last verse of the current chapter
 */

module.exports = (reference) => {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(mongoURI, (err, db) => {

      db.collection('scriptures').insert({
        work: reference.work,
        book: reference.book,
        chap: reference.chap,
        vers: reference.vers,
        text: reference.text,
        prevBook: reference.prevBook,
        nextBook: reference.nextBook,
        prevChap: reference.prevChap,
        nextChap: reference.nextChap,
        lastVerse: reference.lastVerse
      },

      (err, result) => {
        err ? reject(err) : resolve(result)
      });

    });
  });
}
