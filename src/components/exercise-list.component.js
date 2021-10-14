import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// as this constructor is NOT part of the CLASS, we are nto making it a suoer(props)
// functional component.
// this has no states.
// it accepts the props. which is basically req.body. or well, properties.
const Exercise = props => {
	// oh and props stands for properties.
	// create rows fr each elemnt
	<tr>
		{/* create columns for the element */}
		<td>{props.exercise.username}</td>
		<td>{props.exercise.description}</td>
		<td>{props.exercise.duration}</td>
		{/* format date */}
		<td>{props.exercise.date.substring(0, 10)}</td>
		<td>
			{/* this creates the ACTIOSN. The a href one leads to the EXERCISE DELETE of this page. */}
			{/* we can create teh button instead of a href */}
			{/* eslin-disable-next-line */}
			<Link to={"/edit/" + props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.exerciseDelete(props.exercise._id) }}>delete</a>
		</td>
	</tr >
}

export default class ExerciseList extends Component {
	constructor(props) {
		super(props);

		this.exerciseDelete = this.exerciseDelete.bind(this);

		this.state = {
			exercises: [],
		};
	}

	componentDidMount() {
		axios.get('http://localhost:5000/exercises/')
			.then(response => {
				this.setState({ exercises: response.data });
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	exerciseDelete(id) {
		// its gonna take an id
		// res is DATABASE response form the backend. Or well the beackend reposne.
		axios.delete('http://localhost:5000/exercises/' + id)
			.then(res => console.log(res.data));

		// updarte the state
		this.setState({
			// this.state.exercises is the beackend exercises list
			// then we are going to filter it
			// if the id we are deleteing is not matching the id we are entering, leave them alone.
			// this setState will automatically update the page with the deleted element gone.
			// the _id is the stupid  mongoose model _id thing, we see in postamn.
			exercises: this.state.exercises.filter(el => el._id !== id),
		});
	}

	exerciseList() {
		// return something fore every element in the array
		return this.state.exercises.map(exerciseCurrent => {
			// for ecery element we are going to make a component, that will hold the row of the table, as well as action on delete and update.
			// this calls the Exercise method.
			return <Exercise
				exercise={exerciseCurrent}
				deleteExercise={this.exerciseDelete}
				key={exerciseCurrent._id} />
		})
	}

	render() {
		return (
			<div>
				<h3>Exercises</h3>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th>Username</th>
							<th>Description</th>
							<th>Duration</th>
							<th>Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.exerciseList()}
					</tbody>
				</table>
			</div>
		);
	}
}