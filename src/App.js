import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import ContentList from './containers/ContentList';


class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <ContentList/>
      </div>
    </div>
    );
  }
}

export default App;
