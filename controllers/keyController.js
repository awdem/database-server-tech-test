const KeyModel = require('../models/keyModel');


const KeyController = {
  storePair: (req, res) => {
    res.status(201).json({message: 'OK'});
  },
}

module.exports = KeyController;
