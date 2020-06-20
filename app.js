const appRoot = require('app-root-path');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require(appRoot + '/lib/logger.js');
const consoleLogger = logger.getLogger();
const systemLogger = logger.getLogger('system');
const accessLogger = logger.getLogger('access');
const favicon = require('serve-favicon');
const compression = require('compression');
const CACHE_TIME_MSEC =  (1000 * 60 * 60 * 24) * 1; // 1 days

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger.connectLogger(accessLogger, {
  level: 'auto',
  nolog: [
    '/health_check',
  ],
}));

app.use(compression({level: 6})); // compress all resources
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: CACHE_TIME_MSEC }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// add 'require' function in ejs template code.
// add url
app.use(function (req, res, next) {
  var _render = res.render;
  res.render = async function (view, options, fn) {
    // extend config and continue with original render
    options = options || {};
    options.require = require;
    options.originalUrl = req.originalUrl;
    _render.call(this, view, options, fn);
  }
  next();
});

app.use('/', indexRouter);
app.use('/api', apiRouter);

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

process.on('uncaughtException', function (err) {
  consoleLogger.error(err);
  systemLogger.error(err);
});

module.exports = app;
