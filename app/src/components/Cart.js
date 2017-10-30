import React from 'react';

export default function Cart({ num, total }) {

	return (
		<div className="cart">
					
				<h1>Cart</h1>
				<p>Amount of Items: {num}</p>
				<p>Total: ${total}</p>
			
		</div>
	)

}