import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Home from '../Home/Home';

class Layout extends Component {
  render() {
    return (
        <div>
          <Toolbar />
          <Home />
        </div>
    );
  }
}

export default Layout;