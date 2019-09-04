import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Navbar
          dark
          fixed="top"
          expand="lg"
          className="gray-border"
          id="navbar"
        >
          <NavbarBrand className="gray-border mr-0 text-center" href="/">
            Union Club tacoma
            <br />
            <span className="navbar-phone">(253) 304-8415</span>
          </NavbarBrand>
          <NavbarToggler
            className="navbar-toggler-right"
            onClick={this.toggleNav}
          />
          <div className="container">
            <Collapse id="nav-items" isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="mr-auto ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to=" ">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to=" ">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to=" ">
                    Pricing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to=" ">
                    Rentals
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to=" ">
                    Gallery
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to=" ">
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem className="d-block d-lg-none">
                  <NavLink className="nav-link" to=" ">
                    Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
          <NavbarBrand
            className="navbar-login gray-border d-none d-lg-block"
            href="javascript:void(0);"
            onClick={this.toggleModal}
          >
            Member Login
          </NavbarBrand>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody className="row">
            <Form className="col-8 offset-2" onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="username"
                    id="username"
                    name="username"
                    innerRef={input => (this.username = input)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-key"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    innerRef={input => (this.password = input)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup check className="text-center mb-3">
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={input => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <div className="form-row justify-content-center my-2">
                <Button
                  type="button"
                  className="primary btn-light mt-0"
                  size="sm"
                  onClick={this.toggleModal}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  value="submit"
                  className="primary btn-dark ml-2"
                  size="sm"
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;
