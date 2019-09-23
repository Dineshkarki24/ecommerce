import React, { Component } from "react";
import { linkData } from "./linkData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false,
      sidebarOpen: false,
      cart: [],
      cartItems: 0,
      linkData: linkData
    };
  }
  //   For cart
  handleCartOpen = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  // for sidebar
  handleSidebarOpen = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  //  open cart
  cartOpen = () => {
    this.setState({ cartOpen: true });
  };
  //   cart close
  cartClose = () => {
    this.setState({ cartOpen: false });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleCartOpen: this.handleCartOpen,
          handleSidebarOpen: this.handleSidebarOpen,
          cartOpen: this.cartOpen,
          cartClose: this.cartClose
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
