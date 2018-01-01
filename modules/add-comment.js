const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongoURI = 'mongodb://localhost:27017/verse-web-app';

//creates a new comment in db
module.exports = (body) => {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(mongoURI, (err, db) => {
      var collection = db.collection('comments');
      collection.insert({
        scriptureId: ObjectID(body._id),
        comment: body.comment
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
