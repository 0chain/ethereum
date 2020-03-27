import React, { Component } from 'react';
import { Container } from 'reactstrap';

class PageLayout extends Component {
  render() {
    return (
      <div>
        <main>
          <Container className="content-area">{this.props.content}</Container>
        </main>
      </div>
    );
  }
}

export default PageLayout;