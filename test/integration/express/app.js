var express = require('express')
var app = module.exports = express()

var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')

var SessionStore = require('../../session-store')

var session_cookie_name = 'express.sid'
var session_cookie_secret = 'some_secret'

app.set('host', 'localhost')
app.set('port', 3000)
app.set('session_cookie_name', session_cookie_name)
app.set('session_cookie_secret', session_cookie_secret)

app.use(cookieParser())
app.use(bodyParser())

app.use(session({

	key: session_cookie_name,
	secret: session_cookie_secret,
	store: SessionStore

}))

app.listen(app.get('port'))

app.get('/test', function(req, res) {

	res.json(200, 'hi!')

})