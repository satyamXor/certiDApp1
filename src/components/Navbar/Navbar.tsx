import React, { Component } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';




export class NavbarMain extends Component{

  render() {
    return (
      <Navbar  expand="lg" bg="red"   className="color-nav"  variant="light" fixed="top">
          <Navbar.Brand href="/">
            <img className="white-logo" src="./images/whitelogo.png" alt="white-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://certidapp.com/" target="_blank">Faq</Nav.Link>
              <NavDropdown
                title="Blockchain Certificate"
                id="collasible-nav-dropdown"
                className="btn btn-primary btn-sm js-scroll-trigger combtn" >
                    <NavDropdown.Item href="/RegisterCertificate">Register Certificate</NavDropdown.Item>
                    <NavDropdown.Item href="/ViewCertificate">View  Certificate</NavDropdown.Item>
                    <NavDropdown.Item href="/ListAuthorities">List  Authorities</NavDropdown.Item>
                    <NavDropdown.Item href="/SignCertificate">Sign   Certificate</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://certidapp.com/" target="_blank">Blockchain Survey</Nav.Link>
              <Nav.Link
                href="https://eraswap.life/"
                target="_blank"
                className="btn btn-primary btn-sm js-scroll-trigger combtn con-wabtn"
              >
                {' '}
                Connect To Wallet
              </Nav.Link>

              {/* <Nav.Link href="https://eraswaptoken.io/pdf/eraswap_whitepaper.pdf" target="_blank">Whitepaper</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );

  }
}
