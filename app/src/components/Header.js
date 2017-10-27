import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<section className="header">
			<div className="site-title-box">
				<h1>Products E-Site</h1>
				<p>We have what you want.</p>
			</div>


			<nav>
				<ul>
					<Link to="/"><li>Home</li></Link>
					<Link to="/products"><li>Products</li></Link>
					<Link to="/cart"><li>Cart</li></Link>
					<Link to="/about"><li>About</li></Link>
				</ul>
			</nav>

		</section>

	)
}