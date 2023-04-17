var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gold_controller = require('../controllers/Gold');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// gold ROUTES ///
// POST request for creating a gold.
router.post('/golds', gold_controller.gold_create_post);
// DELETE request to delete gold.
router.delete('/golds/:id', gold_controller.gold_delete);
// PUT request to update gold.
router.put('/golds/:id', gold_controller.gold_update_put);
// GET request for one gold.
router.get('/golds/:id', gold_controller.gold_detail);
// GET request for list of all gold items.
router.get('/golds', gold_controller.gold_list);
module.exports = router;

