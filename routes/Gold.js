var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Gold', { title: 'Search Results Gold' });
});

module.exports = router;