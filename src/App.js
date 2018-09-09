import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Head from './components/head'
import Output from './components/output'
import * as actions from './actions/actions';

class App extends Component {

       

 render() {

   {
    var tape = [];
    for (let i=0; i < 50; i++) {
      tape.push(<div className='blank-square tape-square' />)
    }
  }

  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>

    <div className="machine-base">

    </div>

    <div className="machine-head">
    </div>
    <Head />

    <div className="tape">
      <div className="blank-tape">
      </div>
      <div className="swah tape-square">
        🍔🍔
      </div>

     
      {tape}
    </div>
   
    <Output />
   </div>
  );
 }
}
export default connect(null, actions)(App);