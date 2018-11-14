import React, { Component } from "react";
import Button from '../components/button.js';
import '../styles/item.css';

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItem: {},
			isAdded: false,
			quantityAdded: 0
		};
	}
	addToCart(image, name, price, quantity) {
	    this.setState(
	      {
	        selectedItem: {
	          image: image,
	          name: name,
	          price: price,
	          quantity: 1
	        }
	      },
	      function() {
	        this.props.addToCart(this.state.selectedItem);
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
	            selectedItem: {},
	          });
	        }, 3500);
	      }
	    );
	}	
	get initialState() {
      return {
          selectedProduct: {},
		  isAdded: false,
		  quantityAdded: 0
      };
    }
    reset() {
    	setTimeout(() => {
	          this.setState({
	            isAdded: false,
	            selectedItem: {},
	            quantityAdded:0 
	        });
	    }, 3500);
    }
	render() {
		if(this.props.resetBuilder === 1) {
			this.reset();
		}
	    let image = this.props.imgSrc;
	    let name = this.props.name;
	    let price = "$"+this.props.price;
	    let quantityLeft = parseInt(this.props.quantityRemaining)-parseInt(this.state.quantityAdded);
	    return (
	      <div className="item" >
	        <div>
	          <img className="item-image"
	            src={image}
	            alt={this.props.name}
	          />
	        </div>
	        <p className="item-name">{this.props.name}</p>
	        <p className="item-desc">{price}</p>
	        <p className="item-desc">{quantityLeft} in Stock</p>
	        <br/>
	        {quantityLeft!==0 ?
		        <Button 
		        	handleClick = {this.addToCart.bind(
	              				this,
	              				image,
	              				name,
					            this.props.price,
					       		this.state.quantityAdded
	            			)}
		        	label = "Add to Cart"
		        /> :
		        <Button label="Sold Out" />
		    }
	      </div>
    	);
	}
}

export default Item;