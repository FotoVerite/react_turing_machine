import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import Intro from './components/intro'
import chapterOne from './components/chapterOne'
import chapterTwo from './components/chapterTwo'

import Head from './components/head'
import Output from './components/output'
import * as actions from './actions/actions';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


 render() {

  return (

   <div className="App">
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href={`${process.env.PUBLIC_URL}`}>What Is a Turing Machine</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Chapters
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem><NavLink href={`${process.env.PUBLIC_URL}/chapter-1/`}>Chapter 1</NavLink></DropdownItem>
              <DropdownItem><NavLink href={`${process.env.PUBLIC_URL}/chapter-2/`}>Chapter 2</NavLink></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>

     <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route exact path="/" component={Intro} />
        <Route path="/chapter-1/" component={chapterOne} />
        <Route path="/chapter-2/" component={chapterTwo} />
      </div>
    </Router>
    <footer>
    </footer>

   </div>
  );
 }
}
export default connect(null, actions)(App);