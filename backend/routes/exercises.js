const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// the list user route
router.route('/').get((req, res) => {
	Exercise.find()
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json('Error: ' + err));
});

// the /add route that will add users.
router.route('/add').post((req, res) => {
	// username is part of the request body
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);
	// create new instance of a uesr
	const newExercise = new Exercise({
		username, description, duration, date,
	});

	// requrest promise
	newExercise.save()
		.then(() => res.json('Exercise added!'))
		// if error happens, display status and send JSON.
		.cath(err => res.status(400).json('Error: ' + err));
})