const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

/**
 * @method getScripture finds the scripture by work, book, chapter, and verse
 * @param {string} reference.work the work of the scripture reference
 * @param {string} reference.book the book of the scripture reference
 * @param {number} reference.chap the chapter of the scripture reference
 * @param {number} reference.vers the verse of the scripture reference
 */

module.exports = (reference) => {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(mongoURI, (err, db) => {

      db.collection('scriptures').find({
        work: reference.work,
        book: reference.book,
        chap: reference.chap,
        vers: reference.vers
      },

      (err, result) => {
        result.toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
      });

    });
  });
}
