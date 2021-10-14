// I hate how he fucking copy pastes everythign. Jesus christ.
import React, { Component } from 'react';
// and he doesnt explain what those fucking components do. he just "oh this is how you do it"
// motehrfucker im following a tuttorial because i want explanations, not "hurr durr do this".
// why do most fucing tutroials online suck ass i dont fucking get it .

// Sooooo what im guessing is happening here, is that, Link is a module in react router, that creates LINKS to the routes in router.
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	// we want to render something.
	//  DO NOT WRITE BACKEND CODE AFTER RENDER< jeuss, this is frontend shit.
	render() {
		return (
			// because he sucsk at teaching, referring us to DOCUMENTATION, which i can read, but you are here to EXPLAIN right? THEN FUCKING EXPLAIN
			// so what the className is, is basically, what the thing is in index.html, as <div CLASS="sda">
			<div className="navbar navbar-dark bg-dark navbar-expand-lg">
				<Link to="/" className="navbar-brand">ExcerTracker</Link>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link to="/" className="nav-link">Exercises</Link>
						</li>
						<li className="navbar-item">
							<Link to="/create" className="nav-link">Create Exercise</Link>
						</li>
						<li className="navbar-item">
							<Link to="/user" className="nav-link">Create User</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}