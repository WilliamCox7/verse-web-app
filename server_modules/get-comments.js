const mongoClient = require('mongodb').MongoClient;
const mongoURI = require('./get-mongo-uri')();

/**
 * @method getComments gets comments for specified scripture
 * @param  {string} ObjectID the id of the scripture
 */

module.exports = (ObjectID) => {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(mongoURI, (err, db) => {

      db.collection('comments').find({
        "scriptureId": ObjectID
      },

      (err, result) => {
        result = result.sort({"_id": -1});
        result.toArray((err, result) => {
          err ? reject(err) : resolve(result);
        });
      });

    });
  });
}
