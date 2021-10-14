const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// the list user route
router.get('/', (req, res) => {
	Exercise.find()
		.then(exercises => res.json(exercises))
		.catch(err => res.status(400).json('Error: ' + err));
});

// the /add route that will add users.
router.post('/add', (req, res) => {
	// username is part of the request body
	// These are all requests by the CLIENT to our SERVER, through the REQUEST BODY.
	console.log('we are in Exercises add')
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);
	// create new instance of a uesr
	const newExercise = new Exercise({
		username, description, duration, date,
	});

	// requrest promise
	try{
		newExercise.save();
		res.json('Exercise added!');
	}
	catch(err){
		res.status(400).json('Error: ' + err);
		console.error('[', new Date().toUTCString(), ']\n Something went wrong \n', err);
		return;
	}
		// .then(() => res.json('Exercise added!'))
		// // if error happens, display status and send JSON.
		// .cath(err => res.status(400).json('Error: ' + err));
});

module.exports = router;