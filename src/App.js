import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  scrollToMyRef = () => window.scrollTo({
                          top: this.aRef.offsetTop,
                          left: 0,
                          behavior: 'smooth'
                        });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            onClick={() => this.scrollToMyRef()}
          >
            Press me
          </a>
        </header>
        <section ref={ (ref) => this.aRef = ref } style={{ height: '1000px' }}>
          Ola Mundo
        </section>
      </div>
    );
  }
}

export default App;
