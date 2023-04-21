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
// Handle Costume delete on DELETE.
exports.gold_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await gold.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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
    // for a specific Costume. 
exports.gold_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await gold.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    // Handle Costume update form on PUT.
exports.gold_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await gold.findById( req.params.id)
// Do updates of properties
if(req.body.gold_type)
toUpdate.gold_type = req.body.gold_type;
if(req.body.Gold_weight) toUpdate.Gold_weight = req.body.Gold_weight;
if(req.body.Gold_shop) toUpdate.Gold_shop = req.body.Gold_shop;
if(req.body.Gold_cost) toUpdate.Gold_cost = req.body.Gold_cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// Handle a show one view with id specified by query
exports.gold_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await gold.findById( req.query.id)
    res.render('golddetail',
   { title: 'gold Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.gold_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('goldcreate', { title: 'gold Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a costume.
// query provides the id
exports.gold_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await gold.findById(req.query.id)
    res.render('goldupdate', { title: 'gold Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.gold_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await gold.findById(req.query.id)
    res.render('golddelete', { title: 'gold Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    