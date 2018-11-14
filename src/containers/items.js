import React, { Component } from "react";
import Item from './item.js'
import '../styles/items.css';

class ItemsList extends Component {
  constructor(props) {
    super(props);
  }
	render() {
    let productsData;
    productsData = this.props.productsList
      .map(item => {
    		return (
          <Item
            price={item.price}
            name={item.itemName}
            addToCart={this.props.addToCart}
            imgSrc={item.imgSrc}
            quantityRemaining={item.quantityRemaining}
            resetBuilder={this.props.resetBuilder}
          />
        );
      });
    return (
      <div className="items-wrapper">
        {productsData}
      </div>
    );
	}
}

export default ItemsList;