import React, { Component } from "react";
import './button.css'

class Button extends Component {
  render() {
    return (
      <button
        className="btn btn-default"
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
};

export default Button;