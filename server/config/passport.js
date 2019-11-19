const User = require('../models/users');
const local = require('./passport-strategies/local');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
  	done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
  	User.findById(id, (err, user) => {
  		done(err, user)
  	});
  });

  passport.use(local);
}