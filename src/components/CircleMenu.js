import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

import '../css/CircleMenu.css';

export default function CircleMenu() {
  let popoverDown = (
    <Popover id="id">
      <a className="fold-button"></a>
      <a className="mouse-tip"></a>
      <a className="uncomplete">Uncomplete</a>
      {/* <a className="complete">Complete</a> */}
      <a className="fold">Fold</a>
      <a className="destroy">Delete</a>
      <a className="note">
          <span className="note">Add Note</span>
      </a>
    </Popover>
  )
  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverDown}>
      <div className="circle-menu"></div>
    </OverlayTrigger>
  )
}
