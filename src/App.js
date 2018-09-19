import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Head from './components/head'
import Output from './components/output'
import * as actions from './actions/actions';

class App extends Component {

       

 render() {

  return (
   <div className="App">
   
    <Head />
   
    <Output />
   </div>
  );
 }
}
export default connect(null, actions)(App);