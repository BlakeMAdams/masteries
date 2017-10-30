import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';
import { getProducts, cartNum } from '../ducks/reducer';

import '../css/cart.css';
class Cart extends Component {

	constructor(props) {
		super(props);

		this.state = {
			cart: [],
			name: '',
			category: '',
			price: 0,
			quantity: 1
		}
	}

	componentDidMount() {
		axios.get('http://localhost:3030/api/getCart').then(res =>
			this.setState({
				cart: res.data
			})
		)
	}
	removeItem(id) {
		axios.delete('http://localhost:3030/api/deleteItem/'+id).then( this.setState({
			deleted: !true
		}))
	}
	updateItem(id, quantity) {
		let item = { id, quantity };
		console.log('item',item)
		axios.put('http://localhost:3030/api/updateItem', item)
	}
	updateField(e){
		this.setState({
			[e.target.name]: e.target.value
		},console.log('updatedfield state', this.state))
	}
	render() {
		console.log('cart', this.state.cart)
		const myCart = this.state.cart.map((prod, i) => {

			return (
				<div key={prod.id} className="product-block">
					<h2>{prod.name}</h2>
					<p><img className="product-image" src="https://source.unsplash.com/random/300x200" alt={prod.name} /></p>
					<div className="product-subblock">
						<h4>{prod.category}</h4>
						<p>${prod.price}</p>
						<p>Item ID: {prod.id}</p>
						<p>Quantity: <input type="text" onChange={(e)=> this.updateField(e)} name="quantity" value={this.state.quantity}  /></p>

					</div>

					<button className="item-btn" onClick={() => this.removeItem(prod.id)}>Remove</button>
					<button className="item-btn" onClick={() => this.updateItem(prod.id, this.state.quantity)}>Update</button>
				</div>
			)
		});
		return (
			<div className="cart">
				<Header />
				<div className="page">
					<h1>Cart</h1>
					{myCart}
					
				</div>

				<Footer />
				{/* <h2><input type="text" onChange={(e)=> this.updateField(e)} name="name" value={this.state.name} placeholder={prod.name} /></h2>
					<p><img className="product-image" src="https://source.unsplash.com/random/300x200" alt={prod.name} /></p>
					<div className="product-subblock">
						<h4><input type="text" onChange={(e)=> this.updateField(e)} name="category" value={this.state.category} placeholder={prod.category} /></h4>
						<p>$<input type="text" onChange={(e)=> this.updateField(e)} name="price" value={this.state.price} placeholder={prod.price} /></p>
						<p>Item ID: {prod.id}</p> */}
			</div>
		)
	}

}
function mapStateToProps(state) {
	return {
		products: state.products
	}
}

export default connect(mapStateToProps, { getProducts, cartNum })(Cart)

