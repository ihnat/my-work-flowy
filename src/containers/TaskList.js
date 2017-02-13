import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    return (
      <div className="task-list">
        <h1 className="baba">Task List:</h1>
        {[1,2,3].map((item) => <TaskItem key={item}/>)}
      </div>
    );
  }
}

export default TaskList;
