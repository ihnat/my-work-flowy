import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
          <div  className="large-10 columns" >
              <span id="footer-qoute">Make love. Catch fish</span>
          </div>
          <span className="large-2 columns" >
              <a className="subtle-link" href="https://github.com/abhshkdz/HackFlowy">
                  <i className="fi-heart"></i> open source
              </a>
          </span>
      </footer>
    );
  }
}

export default Footer;
