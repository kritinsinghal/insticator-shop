import React, { Component } from "react";
import '../styles/navbar.css'

class Navbar extends Component {
	render() {
		return (
			<div className="header-wrapper">
				<h1>Insticator Shop</h1>
				<div className="title-wrapper">
					<p>Fruits</p>
				</div>
			</div>
		);
	}
}

export default Navbar;