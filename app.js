var express       = require('express');
// const siteRoutes = express.Router();
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

// Configure Express Layouts / Mongoose
const expressLayouts = require('express-ejs-layouts');
const mongoose    = require('mongoose');

// Authentication / Authorization
const passport = require('passport');
const session     = require('express-session');
const flash = require('connect-flash');

// Passport Strategy & Configuration
// const LocalStrategy = require('passport-local').Strategy;
const User        = require('./models/user');
const Horoscope        = require('./models/horoscope');

// const bcrypt      = require('bcrypt');

//Routes
var index         = require('./routes/index');
var signs         = require('./routes/signs');
const authRoutes  = require('./routes/authRoute');
const commentsRoute    = require('./routes/commentsRoute');
const horoscopeRoutes   = require('./routes/horoscopeRoutes');

require('./configs/passport.js');
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);

var app = express();
// var jsonServer = require('json-server');


//Mongoose connection
// mongoose.connect("mongodb://localhost/app");
mongoose.connect("mongodb://localhost/app");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Express Layouts
app.set('layout', 'layouts/main-layout');
app.use(expressLayouts);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "horoscope-secret",
  proxy: true,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));


app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next)=> {
  if(req.user){
    res.locals.user = req.user;
  }
  next();
});

//MIDDLEWARE
app.use('/', authRoutes);
app.use('/', index);
app.use('/signs', signs);
app.use('/', commentsRoute);
app.use('/horoscopes', horoscopeRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.get('*', (req, res) => {
  res.redirect('/login');
}); 

module.exports = app;
