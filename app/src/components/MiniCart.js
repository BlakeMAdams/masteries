import React from 'react';

export default function MiniCart({ num, total }) {
	return (
		<div className="minicart">
					
				<h1>Cart</h1>
				<p>Amount of Items: {num}</p>
				<p>Total: ${total}</p>
				
		</div>
	)
}