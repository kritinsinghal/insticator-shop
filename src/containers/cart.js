import React, { Component } from "react";
import '../styles/cart.css'
import CartItem from './cart-item.js'

class CartContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cart: this.props.cartItems
		}
	}
	removeAll() {
		this.props.cartItems.map(item => {
			this.props.removeProduct.bind(this, item.name);
		}) 
	}
	render() {
		console.log(this.state.cart);
		let cartIt;
    	cartIt = this.state.cart
    	  .map(item => {
      		return (
      			<CartItem 
      				name={item.name}
      				imgSrc={item.image}
      				price={item.price}
      				quantity={item.quantity}
      				remove={this.props.removeProduct.bind(this, item.name)}
      				amount={parseFloat(item.price)*parseFloat(item.quantity)}
      				addToCart={this.props.addToCart}
      			/>
      		);
    	});
		return ( 
			<div className="cart-wrapper">
				<p>Shopping Cart</p>
				{cartIt.length > 0? <div className="cartElement">{cartIt}</div> : 
									<div className="emptyState">Your Shopping Cart is Empty</div>}
				<hr color="white" width="80%" align="right" />
				<p className="total">Total Amount: ${this.props.total} </p>
				<br />
				<button className="confirm"
						onClick={this.removeAll()}>
					Confirm Purchase
				</button>
			</div>
		);
	}
}

export default CartContainer;

