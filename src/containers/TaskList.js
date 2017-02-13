import React, { Component } from 'react';
import Task from './TaskItem';

class TaskList extends Component {
  renderList() {
    return [1,2,3].map((item) => <Task/>);
  }
  render() {
    return (
      <div className="task-list">
        <h1 className="baba">Task List:</h1>
        {[1,2,3].map((item) => <Task key={item}/>)}
      </div>
    );
  }
}

export default TaskList;
