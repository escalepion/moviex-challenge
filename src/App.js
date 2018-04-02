import React, { Component } from 'react';

import './scss/main.css';

import Header from './layouts/Header';
import Title from './layouts/Title';
import Content from './layouts/Content';
import Footer from './layouts/Footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Title />
        <Content>
          Content
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
