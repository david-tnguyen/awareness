const express = require('express');
const mongoose = require('mongoose');
const mfp = require('mfp');
const cors = require('cors');
const passport = require('passport');
const users = require('./controllers/users');
const configurePassport = require('./config/passport');
const configureExpress = require('./config/express');
const secrets = require('./config/secrets');

const app = express();
app.use(cors());

const connect = () => {
	mongoose.connect(secrets.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }, (err, res) => {
		if (err) {
			console.log(`Error connecting to ${secrets.db}. ${err}`)
		} else {
			console.log(`Successfully connected to ${secrets.db}.`)
		}
	});
};

connect();

mongoose.connection.on('error', console.error);
mongoose.connection.on('disconnected', connect);

configurePassport(passport);
configureExpress(app);


// passport.js
// plaid finance API
// google fit API
// myfitnesspal API
// d3
// graphQL
// material UI
// react router

// net worth over time | cash over time | investment over time | credit over time
// budgeting goal | budgeting by categories
// savings goal by EOY
//
// spending over time
// spend by category

app.post('/account/login', users.login);
app.post('/account/register', users.register);

app.get('/fitness', (req, res) => {
  mfp.fetchSingleDate('davidtn10', '2019-11-24', 'all', function(data){
    console.log(data);
    res.end();
  });
})

app.listen(process.env.PORT || 8080);