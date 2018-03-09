const axios = require('axios');
const sm = require('../server_modules');

module.exports = {

  /**
   * @method getScripture gets scripture reference
   * @param {string} req.query.work the work of the scripture reference
   * @param {string} req.query.book the book of the scripture reference
   * @param {string} req.query.chap the chapter of the scripture reference
   * @param {string} req.query.vers the verse of the scripture reference
   */

  getScripture: (req, res) => {

    // convert query parameters to integers
    req.query.chap = Number(req.query.chap);
    req.query.vers = Number(req.query.vers);

    // retrieves scripture from db (checks to see if it exists)
    sm.getScripture(req.query).then((result) => {
      if (result.length > 0) {

        // retrieves comments for specified scripture
        sm.getComments(result[0]._id).then((comments) => {
          result[0].comments = comments;
          result[0] = sm.translator.prepareForClient(result[0]);
          res.status(200).send(result);
        });

      } else {

        // if scripture doesn't exist in db, scrape lds.org for scripture
        sm.scrapeLds(req.query).then((result) => {
          if (result.ops.length > 0) {
            result.ops[0].comments = [];
            result.ops[0] = sm.translator.prepareForClient(result.ops[0]);
            res.status(200).send(result.ops);
          } else {
            res.status(500).send(result);
          }
        });

      }
    });
  },

  /**
   * @method addComment adds a comment to a scripture by id in the db
   * @param {string} req.body._id the id of the scripture the comment will be added to
   */

  addComment: (req, res) => {
    sm.addComment(req.body._id).then((result) => {
      if (result.ops.length > 0) {
        res.status(200).send(result.ops[0]);
      } else {
        res.status(500).send(result);
      }
    });
  }

}
