import React, {Component} from 'react';
import { Link } from 'react-router'
// import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

import '../css/PopoverMenu.css';

export default class CircleBtn extends Component {
  render() {
    return (
      <div className="popover-menu" style={this.props.style}>
        <Link className="popover-menu__item">Item</Link>
        <Link className="popover-menu__item">Item</Link>
      </div>
    )
  }

}
