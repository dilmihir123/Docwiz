import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Navbar,Navba } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import { Form } from "react-bootstrap";
import { NavDropdown, Nav } from "react-bootstrap";

class Navigator extends Component {
  render() {
    return (
      <div className="Navig">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/AbDoc">DocWiz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/About">About</Nav.Link>
              <NavDropdown title="Login/SignUp" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Signup">SignUp</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline></Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navigator;
