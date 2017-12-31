const mongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/verse-web-app';

module.exports = (reference) => {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(mongoURI, (err, db) => {
      var collection = db.collection('scriptures');
      collection.find({
        work: reference.work,
        book: reference.book,
        chap: reference.chap,
        vers: reference.vers
      }, (err, result) => {
        result.toArray((err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
          db.close();
        });
      });
    });
  });
}
