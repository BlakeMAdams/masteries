import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

import logo from '../logo.svg';
import '../App.css';

export default class Products extends Component {
	render() {
		return (
			<div className="products">
				<Header />
				<div className="page">
					<h1>Products</h1>
					<p>This is the products page.</p>
				</div>
				<Footer />
			</div>
		)
	}
}