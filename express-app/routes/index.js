var express = require('express');
var router = express.Router();
var Prices = require('../public/javascripts/getPrices');

router.get('/', (req, res) => {
  let apiKey = req.query.apiKey;

  Prices.getPrices(apiKey).then(result => {
    res.send(result)
    res.end()
  }).catch(err => {
    res.send(err)
  })
})

module.exports = router;