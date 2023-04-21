var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    Account.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }))
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});
//Get the default connection
var db = mongoose.connection;
// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
//Bind connection to error event

db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var goldRouter = require('./routes/Gold');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var goldresource = require('./routes/resource');
var gold = require("./models/Gold");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/golds', goldRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', goldresource);
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await gold.deleteMany();
let instance1 = new
gold({Gold_weight:43.6, Gold_shop:'Lalitha',
Gold_cost:50000});
let instance2 = new
gold({Gold_weight:23.6, Gold_shop:'Pavani',
Gold_cost:780000});
let instance3 = new
gold({Gold_weight:43.6, Gold_shop:'Aparana',
Gold_cost:65000});
instance1.save().then( () => {
  console.log('First object saved');
}).catch( (e) => {
  console.log('There was an error', e.message);
});
instance2.save().then( () => {
  console.log('second object saved');
}).catch( (e) => {
  console.log('There was an error', e.message);
});
instance3.save().then( () => {
  console.log('Third object saved');
}).catch( (e) => {
  console.log('There was an error', e.message);
});
}
let reseed = true;
if (reseed) { recreateDB();}


module.exports = app;
