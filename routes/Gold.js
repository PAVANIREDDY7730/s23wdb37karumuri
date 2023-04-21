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
/* GET detail costume page */
router.get('/detail', gold_controlers.gold_view_one_Page);
/* GET create costume page */
router.get('/create', gold_controlers.gold_create_Page);
/* GET create update page */
router.get('/update', gold_controlers.gold_update_Page);
/* GET delete costume page */
router.get('/delete', gold_controlers.gold_delete_Page);


module.exports = router;

