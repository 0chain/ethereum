import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './footer.scss';
import divider from '../../images/footer/divider.png';
import logo from '../../images/footer/logo.png';

  
  class ZeroChainFooter extends Component {
    render() {
      return (
        <div>
          <div className="d-flex justify-content-center my-5">
            <img src={divider} alt="divider" />
          </div>
  
          <div className="zerochain-footer">
            <Row>
              <Col xs="12" sm="4" className="mt-4" />
  
              <Col xs="12" sm="4">
                <a href="/" className="d-none d-sm-block">
                  <img
                    src={logo}
                    className="mx-auto d-block"
                    width="180"
                    alt="0chain"
                  />
                </a>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
  }
  
  export default ZeroChainFooter;