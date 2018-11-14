import React, { Component } from "react";
import '../styles/cart-item.css'

class CartItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedProduct: [],
			isAdded: false,
			quantityAdded: 0
		};
	}
	addToCart(image, name, price, quantity) {
	    this.setState({
	        selectedProduct: {
	          image: image,
	          name: name,
	          price: price,
	          quantity: 1
	        }
	      },
	      function() {
	        this.props.addToCart(this.state.selectedProduct);
	      }
	    );
	    this.setState(
	      {
	        isAdded: true,
	        quantityAdded: quantity+1
	      },
	      function() {
	        setTimeout(() => {
	          this.setState({
	            isAdded: false,
	            selectedProduct: {}
	          });
	        }, 3500);
	      }
	    );
	}
	render() {
		let image = this.props.imgSrc;
	    let name = this.props.name;
	    let price = "$"+this.props.price;
	    let amount = this.props.amount;
	    let quantity = this.props.quantity;
	    let quantityLeft = parseInt(quantity)-parseInt(this.state.quantityAdded);
		return (
			<div className="cart-item">
				<div className="content-wrapper">
					<img src={image}
					 	className="item-img"></img>
				</div>
				<div className="content-wrapper">
					<p className="quantity">Qty: {quantity}</p>
				</div>
				<br/>
				<p className="price">@{price}each = {amount}</p>
				<button className="delete"
						onClick={this.props.remove}>Delete</button>
			</div>
		);
	}
}

export default CartItem;