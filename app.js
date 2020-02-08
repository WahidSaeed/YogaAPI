var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var router = express.Router()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pranayamaRouter = require('./routes/pranayama');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

router.use('/', indexRouter);
router.use('/users', usersRouter);
router.use('/pranayama', pranayamaRouter);

app.use('/YogaAPI/api/v1/', router);

module.exports = app;
