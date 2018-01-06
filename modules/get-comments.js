const mongoClient = require('mongodb').MongoClient;
const mongoURI = 'mongodb://localhost:27017/verse-web-app';

//gets comments for specified scripture
module.exports = (ObjectID) => {
  return new Promise(function(resolve, reject) {
    mongoClient.connect(mongoURI, (err, db) => {
      var collection = db.collection('comments');
      collection.find({
        "scriptureId": ObjectID
      }, (err, result) => {
        result = result.sort({"_id": -1});
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
