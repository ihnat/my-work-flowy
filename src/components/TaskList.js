import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  renderList() {
    return [1,2,3].map((item) => <Task/>);
  }
  render() {
    return (
      <div className="task-list">
        <h1>Task List</h1>
        {this.renderList()}
      </div>
    );
  }
}

export default TaskList;
