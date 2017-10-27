import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

import logo from '../logo.svg';
import '../App.css';

export default class Cart extends Component {
	render() {
		return (
			<div className="cart">
				<Header />
				<div className="page">
					<h1>Cart</h1>
					<p>This is the cart page.</p>
				</div>
				<Footer />
			</div>
		)
	}
}