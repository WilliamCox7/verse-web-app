const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongoURI = require('./get-mongo-uri')();

/**
 * @method addComment adds a comment to a scripture by id in the db
 * @param  {string} id the id of the scripture the comment will be added to
 */

module.exports = (id) => {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(mongoURI, (err, db) => {

      db.collection('comments').insert({
        scriptureId: ObjectID(id),
        comment: body.comment
      },

      (err, result) => {
        err ? reject(err) : resolve(result)
      });

    });
  });
}
