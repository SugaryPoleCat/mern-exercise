import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

// becasue its similar ot exercise create you can maek exercise-create a component hat handles both create and edit.
export default class ExerciseEdit extends Component {
	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeDuration = this.onChangeDuration.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			description: '',
			duration: 0,
			date: new Date(),
			users: [],
		}
	}
	componentDidMount() {
		// get the ID directly rom the URL.
		axios.get('http://localhost:5000/exercises/' + this.props.match.params.id)
			.then(res => {
				this.setState({
					username: res.data.username,
					description: res.data.description,
					duration: res.data.duration,
					date: new Date(res.data.date),
				});
			})
			.catch((err) => {
				console.log('Error when getting exercises for edit: ', err);
			});
		axios.get('http://localhost:5000/users/')
			.then(response => {
				if (response.data.length > 0) {
					this.setState({
						users: response.data.map(user => user.username),
					})
				}
			})
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value,
		});
	}
	onChangeDescription(e) {
		this.setState({
			description: e.target.value,
		});
	}
	onChangeDuration(e) {
		this.setState({
			duration: Number(e.target.value),
		});
	}
	onChangeDate(date) {
		this.setState({
			date: date,
		});
	}

	async onSubmit(e) {
		await e.preventDefault();

		const exercise = await {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date,
		};

		await console.log(exercise);

		await axios.patch('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
			.then(res => console.log(res.data));
		window.location = '/';
	}

	render() {
		return (
			<div>
				<h3>Edit Exercise</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<select ref="userInput" required className="formControl" value={this.state.username} onChange={this.onChangeUsername}>
							{
								this.state.users.map((user) => {
									return <option key={user} value={user}>{user}</option>
								})
							}
						</select>
					</div>
					<div className="form-group">
						<label>Description: </label>
						<input type="text" required className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
					</div>
					<div className="form-group">
						<label>Duration in minutes: </label>
						<input type="text" required className="form-control" value={this.state.duration} onChange={this.onChangeDuration} />
					</div>
					<div className="form-group">
						<label>Date: </label>
						<div>
							<DatePicker
								selected={this.state.date}
								onChange={this.onChangeDate} />
						</div>
					</div>
					<div className="form-group">
						<input type="submit" value="Edit Exercise" className="btn btn-primary" />
					</div>
				</form>
			</div>
		);
	}
}