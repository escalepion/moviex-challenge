import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/movies';

import './scss/main.css';

import Header from './layouts/Header';
import Title from './layouts/Title';
import ContentContainer from './layouts/ContentContainer';
import Footer from './layouts/Footer';

class App extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <ContentContainer>
          {this.props.children}
        </ContentContainer>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
