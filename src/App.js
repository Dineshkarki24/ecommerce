import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import Sidebar from "./component/sidebar";
import Sidecart from "./component/SideCart";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPages";
import Contact from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import DefaultPage from "./pages/DefaultPage";
import CartPage from "./pages/CartPage";
import "bootstrap/dist/css/bootstrap.css";

// font-family: 'Montserrat', sans-serif;
// font-family: 'Roboto Mono', monospace;

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Sidecart />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/product:id" component={SingleProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route component={DefaultPage} />
      </Switch>
    </>
  );
}

export default App;
