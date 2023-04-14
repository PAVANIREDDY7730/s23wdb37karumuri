var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Gold', { title: 'Search Results Gold' });
// });

// module.exports = router;



const gold_controlers= require('../controllers/Gold');

/* GET costumes */
router.get('/', gold_controlers.gold_view_all_Page );
module.exports = router;
