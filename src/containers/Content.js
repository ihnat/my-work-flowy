import React, {Component} from 'react';

import TaskList from './TaskList';
import Head from './Head';
import Footer from './Footer';

import '../css/Content.css';

export default class Content extends Component {
  render() {
    return (
      <div className="col-md-6 content">
              <Head/>
              <div className="content-main">
                  <TaskList/>
              </div>
              <Footer/>
      </div>
    )
  }
}
