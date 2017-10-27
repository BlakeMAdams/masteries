import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';


export default class About extends Component {
	render() {
		return (
			<div className="about">
				<Header />
				<div className="page">
					<h1>About</h1>
					<p>This is the about page.</p>
				</div>
				<Footer />
			</div>
		)
	}
}