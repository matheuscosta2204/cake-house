import React, { Component } from 'react';

import Layout from './components/layout/Layout';

class App extends Component {

  scrollToMyRef = (ref) => window.scrollTo({
                          top: ref,
                          left: 0,
                          behavior: 'smooth'
                        });

  render() {
    return (
      <Layout />
    );
  }
}

export default App;
