const mongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/verse-web-app';

//creates a new scripture in db
module.exports = (reference) => {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(mongoURI, (err, db) => {
      var collection = db.collection('scriptures');
      collection.insert({
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
      }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
        db.close();
      });
    });
  });
}
