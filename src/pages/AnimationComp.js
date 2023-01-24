import React, { useState } from "react";
import { Navbars } from "../Navbars";
import { Topbar } from "../Topbar";
import Card from "react-bootstrap/Card";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function AnimationComp() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );
  return (
    <div>
      <div id="page-top">
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
          <Navbars style={style} setStyle={setStyle} />
          {/*  <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*  <!-- Main Content --> */}
            <div id="content">
              <Topbar style={style} setStyle={setStyle} />
              <div className="container-fluid text-left">

                <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
                <p className="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                  below were created to extend this theme past the default utility classes built into Bootstrap's
                  framework.</p>


                <div className="row">


                  <div className="col-lg-6">

                    <Card className="position-relative text-left">
                      <Card.Header className="py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
                      </Card.Header>
                      <Card.Body>
                        <div className="mb-3">
                          <code>.animated--grow-in</code>
                        </div>
                        <div className="small mb-1">Navbar Dropdown Example:</div>


                        <Navbar bg="light" expand="lg" className="navbar-expand navbar-light bg-light mb-4">
                          <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="ml-auto animated--grow-in">

                                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className=" justify-content-end">
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">
                                    Another action
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                  </NavDropdown.Item>
                                </NavDropdown>
                              </Nav>
                            </Navbar.Collapse>
                          </Container>
                        </Navbar>
                        <p className="mb-0 small">Note: This utility animates the CSS transform property,
                          meaning it will override any existing transforms on an element being animated!
                          In this theme, the grow in animation is only being used on dropdowns within the
                          navbar.</p>
                      </Card.Body>
                    </Card>

                  </div>


                  <div className="col-lg-6">

                    <div className="card position-relative">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
                      </div>
                      <div className="card-body text-left">
                        <div className="mb-3">
                          <code>.animated--fade-in</code>
                        </div>
                        <div className="small mb-1">Navbar Dropdown Example:</div>

                        <Navbar bg="light" expand="lg" className="navbar-expand navbar-light bg-light mb-4">
                          <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="ml-auto animated--fade-in">

                                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="animated--fade-in">
                                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.2">
                                    Another action
                                  </NavDropdown.Item>
                                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                  </NavDropdown.Item>
                                </NavDropdown>
                              </Nav>
                            </Navbar.Collapse>
                          </Container>
                        </Navbar>

                        <div className="small mb-1">Dropdown Button Example:</div>
                        <div className="dropdown mb-4">
                          <DropdownButton id="dropdown-basic-button" title="Dropdown">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </DropdownButton>
                        </div>
                        <p className="mb-0 small">Note: This utility animates the CSS opacity property, meaning
                          it will override any existing opacity on an element being animated!</p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
