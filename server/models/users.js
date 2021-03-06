const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

// Create user schema
const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
});

// Salt middleware
UserSchema.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password')) return next()
	bcrypt.genSalt(5, (err, salt) => {
		if (err) return next(err)
		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if (err) return next(err)
			user.password = hash;
			next();
		});
	});
});

// Create document
 UserSchema.methods = {
 	comparePassword: function(candidatePassword, cb) {
 		bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
 			if (err) return cb(err);
 			cb(null, isMatch);
 		});
 	}
 };

module.exports = mongoose.model('User', UserSchema);