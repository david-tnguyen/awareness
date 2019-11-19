const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
var mfp = require('mfp');
const cors = require('cors');
const users = require('./controllers/users');
const passport = require('passport')
app.use(cors());

// passport.js
// plaid finance API
// google fit API
// myfitnesspal API
// d3
// graphQL
// material UI
// react router
app.use(express.static(path.join(__dirname, 'build')));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.post('/login', users.login);

app.get('/fitness', (req, res) => {
  mfp.fetchSingleDate('davidtn10', '2019-11-15', 'all', function(data){
    console.log(data);
    res.end();
  });
})

app.listen(process.env.PORT || 8080);