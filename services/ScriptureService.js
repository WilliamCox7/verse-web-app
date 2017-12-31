const axios = require('axios');
const getScripture = require('../modules/get-scripture');
const scrapeLds = require('../modules/scrape-lds');
const translator = require('../modules/translator');

module.exports = {

  //gets scripture reference
  //req.query | work: string, book: string, chap: integer, vers: integer
  getScripture: (req, res) => {

    //convert query parameters to integers
    req.query.chap = Number(req.query.chap);
    req.query.vers = Number(req.query.vers);

    //retrieves scripture from db (checks to see if it exists)
    getScripture(req.query).then((result) => {
      if (result.length > 0) {
        result[0] = translator.prepareForClient(result[0]);
        res.status(200).send(result);
      } else {

        //if scripture doesn't exist in db, scrape lds.org for scripture
        scrapeLds(req.query).then((result) => {
          if (result.ops.length > 0) {
            result.ops[0] = translator.prepareForClient(result.ops[0]);
            res.status(200).send(result.ops);
          } else {
            res.status(500).send(result);
            console.log(result);
          }

        });

      }
    });
  }

}
