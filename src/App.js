import React, { Component } from 'react';

import './scss/main.css';

import Header from './layouts/Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
