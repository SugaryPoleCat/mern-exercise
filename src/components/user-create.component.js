import React, { Component } from 'react';

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
		this.setState({
			users: ['test-user'],
			username: 'test-user',
		});
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
						<input />
					</div>
					<div className="form-group">
						<input type="submit" value="Create Exercise" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}