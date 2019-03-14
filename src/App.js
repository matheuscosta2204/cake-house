import React, { Component } from 'react';

class App extends Component {

  scrollToMyRef = (ref) => window.scrollTo({
                          top: ref,
                          left: 0,
                          behavior: 'smooth'
                        });

  render() {
    return (
      <div>
       
      </div>
    );
  }
}

export default App;
