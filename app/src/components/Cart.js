import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';


export default function Cart({ num, total }) {

	return (
		<div className="cart">
					
				<h1>Cart</h1>
				<p>Amount of Items: {num}</p>
				<p>Total: ${total}</p>
			
			
		</div>
	)

}