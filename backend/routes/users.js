const router = require('express').Router();
let User = require('../models/user.model');

// the list user route
// this GETS requests, so it displays things.
router.route('/').get((req, res) => {
	// mongoose method, finds all users in the DB
	User.find()
	// returns promise as json format.
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
});

// the /add route that will add users.
// This POSTS requests, aka pushes to server inormation
router.route('/add').post((req, res) => {
	// username is part of the request body
	const username = req.body.username;
	// create new instance of a uesr
	const newUser = new User({ username });

	// requrest promise
	newUser.save()
		.then(() => res.json('User added!'))
		// if error happens, display status and send JSON.
		.cath(err => res.status(400).json('Error: ' + err));
})