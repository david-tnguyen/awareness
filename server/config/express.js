const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const connectMongo = require('connect-mongo');
const secrets = require('./secrets');
const passport = require('passport');
const MongoStore = connectMongo(session);

module.exports = (app) => {
	app.set('port', 3000);
	app.set('host', 'localhost');

	// X-Powered-By header has no functional value.
	// Keeping it makes it easier for an attacker to build the site's profile
	app.disable('x-powered-by');

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(express.static(path.join(process.cwd(), 'public')));

	const sess = {
		resave: true,
		saveUninitialized: true,
		secret: secrets.sessionSecret,
		proxy: false,
		name: 'sessionId',
		cookie: {
			httpOnly: true,
			secure: false
		},
		store: new MongoStore({
			url: secrets.db,
			autoReconnect: true
		})
	};

	app.use(session(sess));
	app.use(passport.initialize());
	app.use(passport.session());
};