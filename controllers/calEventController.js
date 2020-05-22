const db = require("../models");

module.exports = {
  view: function(req, res) {
    console.log(req);
    db.CalEvent.find({ year: req.body.year, month: req.body.month})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
