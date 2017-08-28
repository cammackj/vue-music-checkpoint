var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var authRoutes = require('./authentication/auth-routes');
var sessions = require('./authentication/sessions');
// var userRoute = require('./routes/user-route')
var server = express();
var port = process.env.PORT || 3000;

var cors = require('cors')
server.use('/', cors({
	origin: 'http://localhost:8080',
	credentials: true
}))
//MIDDLEWARE
server.use(express.static(__dirname + "/../public/dist"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(sessions);
server.use('/', authRoutes);
function authenticate(req, res, next) {
	if (req.session.uid || req.method === 'GET') {
		req.body.userId = req.session.uid;
		return next();
	}
	return res.send(401, "please login to continue");
}
server.use('/', authenticate);
// server.use('/api/categories', categoryRoute);
// server.use('/api/comments', commentRoute);
// server.use('/api/gifResponses', gifResponseRoute);
// server.use('/api/quotes', quoteRoute);
// server.use('/api/users', userRoute);

server.listen(port, () => {
	console.log("starting up Node, on port", port)
});

var dbConnect = require("./config/db/mlab-config");