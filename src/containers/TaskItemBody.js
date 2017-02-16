import React, { Component } from 'react';
import Circle from '../components/Circle';

import '../css/TaskItemBody.css';


export default class TaskItemBody extends Component {
  constructor(props) {
    super();

    this.onKeyDown = this.onKeyDown.bind(this);
  }
  createTask() {
    console.log('createTask');
  }
  onKeyDown(e) {
    if (e.key === "Enter") {
      this.createTask();
    }
  }
  render() {
    return (
      <div className="task-item-body">
          <Circle/>
          <input className="task-item-body__input" onKeyDown={this.onKeyDown}/>
      </div>
    );
  }
}
