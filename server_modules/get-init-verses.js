const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

module.exports = (verse) => new Promise((resolve, reject) => {

  mongoClient.connect(mongoURI, (err, db) => {

    db.collection('scriptures').find({
      workFul: verse.work, bookFul: verse.book,
      chapter: Number(verse.chap), verse: Number(verse.vers)
    }, (err, result) => {

      if (err) reject(err);

      result.toArray((err, result) => err
        ? reject(err)
        : (
          Promise.all([
            db.collection('scriptures').find({ _id: result[0].prevId }).toArray(),
            db.collection('scriptures').find({ _id: result[0].nextId }).toArray()
          ]).then((surrounding) => {
            resolve([surrounding[0][0], result[0], surrounding[1][0]])
          }).catch((err) => {
            reject(err);
          })
        )
      );

    });

  });

});
