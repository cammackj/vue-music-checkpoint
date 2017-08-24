let session = require('express-session');
let MongoDBStore = require('connect-mongodb-session')(session);

let store = new MongoDBStore({
	uri: 'mongodb://student:student@ds027628.mlab.com:27628/vue-music',
	collection: 'Sessions'
});

store.on('error', error => {
	console.error('SESSION ERROR:', error);
});

module.exports = session({
	secret: "Fly you fools!!!",
	cookie: {
		maxAge: 1000 * 60 * 15* 60 * 24 * 7 // 1 week
	},
	store: store,
	resave: true,
	saveUninitialized: true
});