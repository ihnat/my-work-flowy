import React, { Component } from 'react';
// import Circle from '../components/Circle';
import TaskItemBody from '../containers/TaskItemBody';

import '../css/TaskItem.css';


class TaskItem extends Component {
  render() {
    return (
      <li className="task-item">
          <div className="task-item-family">
              <TaskItemBody/>
              {/* <div className="task-item__sub">

              </div> */}
          </div>
      </li>
    );
  }
}

export default TaskItem;
