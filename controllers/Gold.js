var gold = require('../models/Gold');
// List of all golds
exports.gold_list = function(req, res) {
res.send('NOT IMPLEMENTED: gold list');
};
// for a specific gold.
exports.gold_detail = function(req, res) {
res.send('NOT IMPLEMENTED: gold detail: ' + req.params.id);
};
// Handle gold create on POST.
exports.gold_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: gold create POST');
};
// Handle gold delete form on DELETE.
exports.gold_delete = function(req, res) {
res.send('NOT IMPLEMENTED: gold delete DELETE ' + req.params.id);
};
// Handle gold update form on PUT.
exports.gold_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: gold update PUT' + req.params.id);
};
// List of all golds
exports.gold_list = async function(req, res) {
    try{
    thegolds = await gold.find();
    res.send(thegolds);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   // VIEWS
// Handle a show all view
exports.gold_view_all_Page = async function(req, res) {
try{
thegolds = await gold.find();
res.render('gold', { title: 'gold Search Results', results: thegolds });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// Handle Costume create on POST.
exports.gold_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gold();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Gold_weight = req.body.Gold_weight;
    document.Gold_shop = req.body.Gold_shop;
    document.Gold_cost = req.body.Gold_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    