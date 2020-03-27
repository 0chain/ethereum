import React, { Component } from 'react';
import './header.scss';
import { Container, Row, Col } from 'reactstrap';

class SectionHeader extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="12" sm="3" />
          <Col xs="12" sm="6">
            <h1 className="text-uppercase text-center">0Chain's Ethereum Integration</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SectionHeader;