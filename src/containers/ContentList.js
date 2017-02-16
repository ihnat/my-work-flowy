import React, {Component} from 'react';

import TaskList from './TaskList';
import Head from './Head';
import Footer from './Footer';

import '../css/ContentList.css';

export default class Content extends Component {
  render() {
    return (
      <div className="col-lg-6 col-md-8 col-sm-12 content-list">
          <Head/>
          <div className="content-main">
              <TaskList/>
          </div>
          <Footer/>
      </div>
    )
  }
}
