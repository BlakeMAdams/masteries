import React, { Component } from 'react';

import Header from './Header';

import logo from '../logo.svg';
import '../App.css';

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<Header />
				<h1>Home</h1>
				<p>This is the home page.</p>
			</div>
		)
	}
}