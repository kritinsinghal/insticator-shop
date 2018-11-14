import React, { Component } from "react";
import '../styles/cart-item.css'

class CartItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: {},
			isAdded: false,
			quantityAdded: 0,
		};
	}
	addToCart(image, name, price, quantity, left) {
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
	    let amount = "$"+this.props.amount.toFixed(2);
	    let quantity = this.props.quantity;
	    console.log(this.state.quantityAdded);
	    let quantityLeft = parseInt(quantity)-parseInt(this.state.quantityAdded);
		return (
			<table className="cart-item">
				<tr className="content-wrapper">
					<td className="image-wrapper">
						<img src={image}
					 		className="item-img"></img>
					 	<button className="toggle">-</button>
						<button className="toggle"
								onClick={this.addToCart.bind(
	              				this,
	              				image,
	              				name,
					            this.props.price,
					       		this.state.quantityAdded,
					       		quantityLeft
	            			)}
						>+</button>
					</td>
					<td>
						<h1 align="left">{name}</h1>
						<p className="quantity">Qty: {quantity}</p>
						<p className="price">@{price}each = {amount}</p>
					</td>
				</tr>
				<tr className="function-wrapper">
					<td>
						
					</td>
					<td>
						<button className="delete"
						onClick={this.props.remove}>Delete</button>
					</td>
				</tr>
			</table>
		);
	}
}

export default CartItem;