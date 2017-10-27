import React, { Component } from 'react';

import Header from './Header';

import logo from '../logo.svg';
import '../App.css';

export default class Cart extends Component {
	render() {
		return (
			<div className="cart">
				<Header />
				<h1>Cart</h1>
				<p>This is the cart page.</p>
			</div>
		)
	}
}