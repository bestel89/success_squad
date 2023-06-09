const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')

require('dotenv').config()
require('./config/database')
require('./config/passport')

const index = require('./routes/index')
const users = require('./routes/users')
const boards = require('./routes/boards')
const objectives = require('./routes/objectives')
const keyResults = require('./routes/krs')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))

//Mounting the session middleware
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))

//Mount passport
app.use(passport.initialize())
app.use(passport.session())

//res locals custom middleware
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

//Mount routers
app.use('/', index)
app.use('/users', users)
app.use('/boards', boards)
app.use('/', objectives)
app.use('/krs', keyResults)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
});

module.exports = app
