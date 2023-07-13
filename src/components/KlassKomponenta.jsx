import React, { Component } from "react";

class KlassKomponenta extends Component {
  render() {
    return (
      <div>
        <h2>Grad: {this.props.grad}</h2>
      </div>
    );
  }
}

export default KlassKomponenta;
