const router = require('express').Router();
let User = require('../models/user.model');

// the list user route
// this GETS requests, so it displays things.
router.get('/', (req, res) => {
	// mongoose method, finds all users in the DB
	User.find()
	// returns promise as json format.
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
});

// the /add route that will add users.
// This POSTS requests, aka pushes to server inormation
router.post('/add', (req, res) => {
	// username is part of the request body
	const username = req.body.username;
	// create new instance of a uesr
	const newUser = new User({ username });

	// requrest promise
	try{

		newUser.save();
		res.json('User added!');
	}
	catch(err){
		res.status(400).json('Error: ' + err);
		console.error('[', new Date().toUTCString(), ']\n Something went wrong \n', err);
		return;
	}
		// .then(() => res.json('User added!'))
		// // if error happens, display status and send JSON.
		// .cath(err => res.status(400).json('Error: ' + err));
});

module.exports = router;