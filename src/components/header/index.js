import React, { Component } from 'react';
import {  Navbar } from 'reactstrap';

import { NavLink } from 'react-router-dom';

import zerochainLogo from '../../images/header/0chain_text_logo_black.svg';
import './header.scss';

class ZeroChainHeader extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.navLinkClicked = this.navLinkClicked.bind(this);
      this.state = {
        isOpen: false
      };
    }
  
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  
    navLinkClicked() {
      this.setState({
        isOpen: false
      });
    }
  
    render() {
      return (
        <div>
          <Navbar
            color="light"
            light
            expand="lg"
            fixed="top"
            className="zerochain-navigation"
          >
            <NavLink to="/" className="navbar-brand">
              <img
                style={{ height: '36px' }}
                onClick={this.navLinkClicked}
                src={zerochainLogo}
                alt={''}
                height="50"
              />
              {/* <span>{formatMessage(intlMsg.quote)}</span> */}
            </NavLink>

          </Navbar>
        </div>
      );
    }
  }
  
  export default ZeroChainHeader;