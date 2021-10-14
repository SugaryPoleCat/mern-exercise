const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// the course uses a retarded thing, of doing router.route() for no reason.
// it would be like that if you didnt do express.Router() but we do, so we dont need  to use the freaking router.route() whats hte point jeez.
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
	console.log('we are in Exercises add');
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);
	// create new instance of a uesr
	const newExercise = new Exercise({
		username, description, duration, date,
	});

	// requrest promise
	try {
		newExercise.save();
		res.json('Exercise added!');
	}
	catch (err) {
		res.status(400).json('Error: ' + err);
		console.error('[', new Date().toUTCString(), ']\n Something went wrong \n', err);
		return;
	}

	// The exercise is adamnt on using .then.catch promises, but try/catching them using blocks is much better and teaches you more how to program normally, not the JS way.
	// .then(() => res.json('Exercise added!'))
	// // if error happens, display status and send JSON.
	// .cath(err => res.status(400).json('Error: ' + err));
});

// this will find an exercise by the ID provided.
router.get('/:id', (req, res) => {
	// seems to be a Mongoose own thing, cause sequelize works similar but a littel different
	Exercise.findById(req.params.id)
		.then(exercise => res.json(exercise))
		.catch(err => res.status(400).json('Error: ' + err));
});

// This will delete a exercise
router.delete('/:id', (req, res) => {
	// seems to be a Mongoose own thing, cause sequelize works similar but a littel different
	try{
		Exercise.findByIdAndDelete(req.params.id);
		res.json('Exercise deleted!');
	}
	catch(err){
		res.status(400).json('Error: ', err);
	}
		// .then(() => res.json('Exercise deleted!'))
		// .catch(err => res.status(400).json('Error: ' + err));
});

// this will update an exercise. I have no idea why the course says to use .post for update, but i will follow for now and fix errors as they come cause i know what to do,.
// okay i just use .patch instead.
router.patch('/update/:id', (req, res) => {
	// seems to be a Mongoose own thing, cause sequelize works similar but a littel different
	Exercise.findById(req.params.id)
		.then(exercise => {
			exercise.username = req.body.username;
			exercise.description = req.body.description;
			exercise.duration = Number(req.body.duration);
			exercise.date = Date.parse(req.body.date);

			// i already know that .save() tdoesnt work with .then.catch
			try{
				exercise.save();
				res.json('Exercise updated!');
			}
			catch(err){
				res.status(400).json('Error: ' + err);
				console.error('[', new Date().toUTCString(), ']\n Something went wrong \n', err);
				return;
			}
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;