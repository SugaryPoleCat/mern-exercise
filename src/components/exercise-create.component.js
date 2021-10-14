import React, { Component } from 'react';

export default class ExerciseCreate extends Component {
	// constructors
	constructor(props) {
		// In react, you always have to define SUPER, when defining constructor of a subclass.
		// all constructors in react, that are part of a subclass, start with constructor(props) and have super(props);
		super(props);

		// this binds the STATES, or as i like to call, events, to this CLASS, so that when referring to THIS, within those methods (liek onChangeUsername), THIS will return THIS class, and not NOTHING.
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeDuration = this.onChangeDuration.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		// create the backend json thing.
		// in react youre always gonna create things in state.
		// so when we update the state, it will autmatically update the users: [] page with the new values.
		this.state = {
			username: '',
			description: '',
			duration: 0,
			date: new Date(),
			// and lets add ract specific thing, to get user page while we create a new exercise for hte user, to you know, get user info.
			// o our website we will have a dropdown with user selection so we can select which user.
			users: [],
		}
	}

	onChangeUsername(e){
		// changing a state, ou use this.setState();
		// because he doesnt explain very well, e is basically the req.body of react.
		// this just updates teh STATE for this one attribute in our state.
		this.setState({
			username: e.target.value,
		});
	}
	onChangeDescription(e){
		this.setState({
			description: e.target.value,
		});
	}
	onChangeDuration(e){
		this.setState({
			duration: Number(e.target.value),
		});
	}
	// because we are going to use a library taht creates a calender, so that you can pickdate, we are not using (e)
	onChangeDate(date){
		// we want this to refer to this class. check up below the PROPRS again, the this.on things.
		this.setState({
			date: date,
		});
	}

	// when someone clicks the submit button
	onSubmit(e){
		// prevent default HTML form processing
		e.preventDefault();

		// you can only create variables in methods if they are going to be used within the method only
		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date,
		};

		console.log(exercise);

		window.location = '/';
		// once you submit exercise, its going to go back to the list of exercises.
	}

	// frontend
	render() {
		return (
			<div>
				<p>You are on the Exercise Create component!</p>
			</div>
		);
	}
}