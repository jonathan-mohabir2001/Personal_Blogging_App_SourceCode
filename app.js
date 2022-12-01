/*
Group 01 codebase. 

*/
const express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//THIS IS ROUTES
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//END OF ROUTES 

const app = express();
// Required moduels imported above. 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// setting of view engine to allow pug files to render.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// middleware set above. 


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', indexRouter);





// route to index and users.
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

module.exports = app;
