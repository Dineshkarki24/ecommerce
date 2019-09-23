import React, { Component } from "react";
import { ProductConsumer } from "../context/context";

class HomePage extends Component {
  state = {};
  render() {
    return <ProductConsumer>{value => console.log(value)}</ProductConsumer>;
  }
}
export default HomePage;
