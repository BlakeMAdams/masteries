import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';


export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<Header />
				<div className="page">
					<h1>Home</h1>
					<p>This is the home page.</p>
				</div>
				<Footer />
			</div>
		)
	}
}