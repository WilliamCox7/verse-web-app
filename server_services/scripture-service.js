const sm = require('../server_modules');

module.exports = {

  getInitVerses: (req, res) => {
    sm.getInitVerses(req.params).then((response) => {
      res.status(200).send(response);
    }).catch((err) => {
      res.status(500).send(err);
    });
  },

  getVerse: (req, res) => {
    sm.getVerse(req.params.id).then((response) => {
      res.status(200).send(response);
    }).catch((err) => {
      res.status(500).send(err);
    });
  }

}
