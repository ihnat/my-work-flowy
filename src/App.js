import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Content from './containers/Content';


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <Content/>
      </div>
    </div>
    );
  }
}

export default App;
