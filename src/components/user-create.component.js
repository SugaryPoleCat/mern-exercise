import React, { Component } from 'react';
import axios from 'axios';

export default class UserCreate extends Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
		}
	}

	componentDidMount() {
		// can comment this out when you are done tsting with hadrdoce
	// 	this.setState({
	// 		users: ['test-user'],
	// 		username: 'test-user',
	// 	});
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			username: this.state.username,
		};

		console.log(user);

		// we are now sending the date from forntend to backend;

		// this sends the request to backend/routes/users/add POST route
		// it will not accept duplicate names, so erraros will pop up if you add same username
		axios.post('http://localhost:5000/users/add', user)
			.then(res => console.log(res.data));


		// window.location = '/';
		this.setState({
			username: '',
		});
		// make it blank so they can set a new user
	}

	render() {
		return (
			<div>
				<h3>Create New Exercise</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
					</div>
					<div className="form-group">
						<input type="submit" value="Create User" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}