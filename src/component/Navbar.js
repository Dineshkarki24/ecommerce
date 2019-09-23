import React, { Component } from "react";
import Styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { MdMenu, MdShoppingCart } from "react-icons/md";
class Navbars extends Component {
  state = {};
  render() {
    return (
      <NavWrapper>
        <div className="container-fluid">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">
              <MdMenu />
            </Navbar.Brand>
            <Navbar.Brand className="ml-auto" href="#">
              <MdShoppingCart />
            </Navbar.Brand>
          </Navbar>
        </div>
      </NavWrapper>
    );
  }
}
const NavWrapper = Styled.div`
background-color:#f4f4f4;


`;

export default Navbars;
