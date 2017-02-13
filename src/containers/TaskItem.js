import React, { Component } from 'react';
import CircleMenu from '../components/CircleMenu';

// import '../css/TaskItem.css';


class TaskItem extends Component {
  render() {
    return (
      <div className="TaskItem">
        <li className="folded">
            <div className="task-wrappper">
                <div className="task">
                    <CircleMenu/>
                    <input className="edit"/>
                </div>
            </div>
        </li>
      <div className="children folded"></div>
      <div className="children"></div>
    </div>
    );
  }
}

export default TaskItem;
