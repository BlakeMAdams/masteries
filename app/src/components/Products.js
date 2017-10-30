import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import MiniCart from './MiniCart';
import { getProducts, cartNum } from '../ducks/reducer';


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

	}
	componentDidMount() {
		this.props.getProducts().then(res => this.setState({
			products: res.value
		}, () => console.log('state products', this.state.products))
		)

		this.setState({
			filter: this.props.match.params.type
		}, console.log('state of filter after props.match.params.type', this.state))

	}

	addToCart(item_id, name, category, price) {
		console.log('item_id', item_id)
		let itemCart = { item_id: item_id, name: name, category: category, price: price };
		let tempCart = this.state.cart;
		// let num = parseInt(e.target.value);
		tempCart.push(price)

		axios.post('http://localhost:3030/api/addItem', itemCart).then(this.setState({
			cart: tempCart
		}, ()=> this.props.cartNum(this.state.cart.length))
		)

		


		console.log('item', itemCart)

	}



	filterCategory(e) {
		this.setState({
			filter: e.target.value
		})
	}

	render() {
		// console.log('state=', this.state)
		// console.log('this.props', this.props)

		var total = this.state.cart.reduce((prev, curr) => {
			return prev + curr
		}, 0);
		// console.log('total', total)


		const productsFiltered = this.state.products
			.filter((product) => this.state.filter === product.category)
			.map((prod, i) => {
				// console.log('productsF', productsFiltered)
				return (
					<div key={prod.id} className="product-block">
						<h2>{prod.name}</h2>
						<p><img className="product-image" src="https://source.unsplash.com/random/300x200" alt={prod.name} /></p>
						<div className="product-subblock"><h4>{prod.category}</h4>
							<p>${prod.material}</p>
						</div>
						<button className="item-btn" onClick={()=> this.addToCart(prod.id, prod.name, prod.category, prod.material)}>Add</button>
						{/*this.addToCart(prod.id, prod.name, prod.category, prod.material)*/}
					</div>
				)
			});

		const products = this.state.products
			.map((prod, i) => {

				return (
					<div key={prod.id} className="product-block">
						<h2>{prod.name}</h2>
						<p><img className="product-image" src="https://source.unsplash.com/random/300x200" alt={prod.name} /></p>
						<div className="product-subblock"><h4>{prod.category}</h4>
							<p>${prod.material}</p>
						</div>
						<button className="item-btn" onClick={()=>this.addToCart(prod.id, prod.name, prod.category, prod.material)}>Add</button>
					</div>
				)
			})

		return (
			<div className="products">
				<Header />
				<div className="page">
					<div className="products-header">
						<div>
							<h1>Products</h1>
							<p>Filter Products</p>
							<select onChange={(e) => this.filterCategory(e)}>
								<option value='' defaultValue='' >All</option>
								<option value="Dresses">Dresses</option>
								<option value="Skirts">Skirts</option>
								<option value="Pants">Pants</option>
								<option value="Tops">Tops</option>

							</select>
						</div>
						<div>

							<MiniCart num={this.state.cart.length} total={total} />
						</div>
					</div>

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

export default connect(mapStateToProps, { getProducts, cartNum })(Products)

/* react component lifecycle */