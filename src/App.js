import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/store_items.json';
import ItemsList from './containers/items.js';
import Navbar from './containers/navbar.js';
import CartContainer from './containers/cart.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      category: "",
      cartBounce: false,
      quantity: 1,
      resetBuilder: 0
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }
  checkItem(productName) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.name === productName;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }
  sumTotalAmount() {
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += parseFloat(cart[i].price) * parseFloat(cart[i].quantity);
    }
    this.setState({
      totalAmount: total.toFixed(2)
    });
  }
  handleAddToCart(item) {
    let cartItem = this.state.cart;
    let productName = item.name;
    let productQty = item.quantity;
    if (this.checkItem(productName)) {
      let index = cartItem.findIndex(x => x.name == productName);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(item);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true,
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(name, e) {
    console.log("going");
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.name == name);
    cart.splice(index, 1);
    this.setState({
      cart: cart,
      resetBuilder: 1
      },
      function() {
        setImmediate(() => {
          this.setState({
            resetBuilder: 0
          });
        }); 
      }
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div className="container">
            <div className="items">
              <ItemsList 
                productsList={data}
                addToCart={this.handleAddToCart}
                resetBuilder={this.state.resetBuilder}
              />
            </div>
            <div className="cart">
              <CartContainer 
                cartBounce={this.state.cartBounce}
                total={this.state.totalAmount}
                totalItems={this.state.totalItems}
                cartItems={this.state.cart}
                removeProduct={this.handleRemoveProduct}
                addToCart={this.handleAddToCart}
                resetBuilder={this.state.resetBuilder}
              />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
