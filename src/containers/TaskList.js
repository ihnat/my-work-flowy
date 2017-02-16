import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    return (
      <ul className="task-list">
        {[1,2,3].map((item) => <TaskItem key={item}/>)}
      </ul>
    );
  }
}

export default TaskList;
