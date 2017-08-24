let router = require('express').Router();
let Users = require('../models/user');

router.post('/register', (req, res, next) => {
	var newUser = req.body
	Users.find({})
		.then(users => {
			Users.create(req.body)
				.then(user => {
					req.session.uid = user._id;
					req.session.save();
					user.password = null;
					delete user.password;
					res.send({
						message: 'Successfully created user account',
						data: user
					})
				})
				.catch(next)
		})
		.catch(next)
})

router.post('/login', (req, res) => {
	Users.findOne({ username: req.body.username.toLowerCase() })
		.then(user => {
			user.validatePassword(req.body.password)
				.then(valid => {
					if (!valid) {
						return res.send({ error: "invalid username or Password" });
					}
					req.session.uid = user._id;
					req.session.save();
					user.password = null;
					delete user.password;
					res.send({
						message: 'successfully logged in',
						data: user
					});
				})
				.catch(err => {
					res.send({ error: err || 'Invalid Email or Password' });
				})
		})
		.catch(err => {
			res.send({
				error: err,
				message: 'Invalid Email or Password'
			});
		});
});

router.delete('/logout', (req, res) => {
	req.session.destroy();
	res.send({
		message: 'You have successfully been logged out. Please come back soon!'
	});
})

router.get('/authenticate', (req, res) => {
	Users.findById(req.session.uid)
		.then(user => {
			return res.send({
				data: user
			})
		})
		.catch(err => {
			return res.send({
				error: err
			})
		})
})

function checkIfDuplicate(newUser) {
	Users.find({})
		.then(users => {
			users.forEach(user => {
				if (user.email == newUser.email || user.username == newUser.username)
					return false;
			})

			return true;
		})
}

router.use('/', (err, req, res, next) => {
	if (err) {
		res.send(418, {
			success: false,
			error: err.message
		})
	} else {
		res.send(400, {
			success: false,
			error: 'Something failed please try again later'
		})
	}
})

module.exports = router