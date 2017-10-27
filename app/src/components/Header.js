import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg'

export default function Header() {
	return (
		<header className="header">
			<section className="site-title-container">
				<div className="site-title-box">
					<h1 id="site-title">Products E-Site</h1>
					<p>We have what you want.</p>
				</div>

				<img className="site-logo" src={logo} alt="Products E-Site Logo" />
			</section>

			<nav>
				<ul>
					<Link to="/"><li>Home</li></Link>
					<Link to="/products"><li>Products</li></Link>
					<Link to="/cart"><li>Cart</li></Link>
					<Link to="/about"><li>About</li></Link>
				</ul>
			</nav>

			

		</header>

	)
}