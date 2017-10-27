import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import { getProducts } from '../ducks/reducer';

import '../css/products.css';

class Products extends Component {

	constructor(props) {
		super(props);

		this.state = {
			products: [],
			filter: null,
			total: 0,
			cart: []
		}
		this.addToCart = this.addToCart.bind(this);
		this.addToCart = this.addToCart.bind(this);
	}
	componentDidMount() {
		this.props.getProducts().then(res => this.setState({
			products: res.value
		}, () => console.log('state products', this.state.products))
		)
	}

	addToCart(e) {
		let tempCart = this.state.cart;
		let num = parseInt(e.target.value);
		tempCart.push(num)

		this.setState({
			cart: tempCart
		})
	}


	filterCategory(e) {
		this.setState({
			filter: e.target.value
		})
	}

	render() {
		console.log('state=', this.state)

		var total = this.state.cart.reduce((prev, curr) => {
			return prev + curr }, 0);
		console.log('total', total)
		

		const productsFiltered = this.state.products
			.filter((product) => this.state.filter === product.category)
			.map((prod, i) => {
				console.log('productsF', productsFiltered)
				return (
					<div key={prod.id} className="product-block">
						<h2>{prod.name}</h2>
						<h4>{prod.category}</h4>
						<p>${prod.material}</p>
					</div>
				)
			});

		const products = this.state.products
			.map((prod, i) => {

				return (
					<div key={prod.id} className="product-block">
						<h2>{prod.name}</h2>
						<h4>{prod.category}</h4>
						<p>${prod.material}</p>
						<button className="item-btn" value={prod.material} onClick={(e) => this.addToCart(e)}>Add</button>
					</div>
				)
			})

		return (
			<div className="products">
				<Header />
				<div className="page">
					<h1>Products</h1>
					<p>Cart Num: {this.state.cart.length} Cart Total: ${total}</p>
					<p>Filter Products</p>
					<select onChange={(e) => this.filterCategory(e)}>
						<option value='' defaultValue='' >All</option>
						<option value="Dresses">Dresses</option>
						<option value="Skirts">Skirts</option>
						<option value="Pants">Pants</option>
						<option value="Tops">Tops</option>

					</select>
					<section className="products-container">

						{this.state.filter ? productsFiltered : products}
					</section>
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
export default connect(mapStateToProps, { getProducts })(Products)