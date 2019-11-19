import passport from "passport"
import User from '../models/users';

// -------------------------------------------

exports.login = function(req, res, next) {
	// Do email and password validation for the server
	passport.authenticate("local", function(err, user, info) {
		if (err) return next(err);
		if (!user) {
			return res.json({ success: false, message: info.message });
		}

		req.logIn(user, loginErr => {
			if (loginErr) {
				return res.json({ success: false, message: loginErr });
			}
			return res.json({ success: true, message: "authentication succeeded" });
		})
	})(req, res, next)
}

exports.register = function(req, res, next) {
	User.findOne({ email: req.body.email }, (err, user) => {
		// Check if email is already registered
		if (user) {
			res.json({ success: false, message: "Email already in use" });
			return;
		}

    // Create user
		else {
			User.create(req.body, (err) => {
				if (err) {
					console.error(err);
					res.json({ success: false });
					return;
				}
				res.json({ success: true });
				return;
			});
		}
	});
}