const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const mongoURI = require('./get-mongo-uri')();

module.exports = (id) => new Promise((resolve, reject) => {

  mongoClient.connect(mongoURI, (err, db) => {

    db.collection('scriptures').find({
      _id: ObjectId(id)
    }, (err, result) => {

      if (err) reject(err);

      result.toArray((err, result) => err
        ? reject(err)
        : resolve(result)
      );

    });

  });

});
