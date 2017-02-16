import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Overlay, Button } from 'react-bootstrap';
import PopoverMenu from './PopoverMenu';

import '../css/Circle.css';

export default class CircleMenu extends Component {
  constructor() {
    super();
    this.state = { showPopover: false };

    this.createSubtask = this.createSubtask.bind(this);
    this.openPopoverMenu = this.openPopoverMenu.bind(this);
    this.closePopoverMenu = this.closePopoverMenu.bind(this);
  }
  openPopoverMenu(e) {
    this.setState({ showPopover: true });
  }
  closePopoverMenu(e) {
    this.setState({ showPopover: false });
  }
  createSubtask() {

  }
  render() {
    return (
      <div className="circle" onMouseLeave={this.closePopoverMenu}>
        <div className="circle__btn" ref="target"
          onClick={this.createSubtask}
          onMouseOver={this.openPopoverMenu}
          >

        </div>

        <Overlay
          show={this.state.showPopover}
          placement="bottom"
          container={this}
          target={() => ReactDOM.findDOMNode(this.refs.target)}
        >
          <PopoverMenu/>
        </Overlay>
      </div>
    );
  }
}
