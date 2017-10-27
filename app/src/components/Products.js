import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import { getProducts } from '../ducks/reducer';

import logo from '../logo.svg';
import '../App.css';

class Products extends Component {

	constructor(props) {
		super(props);

		this.state = {
			products: []
		}

	}
	componentDidMount() {
		this.props.getProducts().then( res => this.setState({
			products: res.value
		}, () => console.log('state products', this.state.products))
		)
	}



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
function mapStateToProps(state) {
	return {
		products: state.products
	}
}
export default connect(mapStateToProps, { getProducts})(Products)