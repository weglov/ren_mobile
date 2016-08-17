import React, { Component } from 'react';
import AppHeader from './components/header/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppHeader />
	          <div className="n_wrap">
	          	{this.props.children}
	          </div>
      </div>
    );
  }
}

export default App;
