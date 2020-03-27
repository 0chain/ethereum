import React, { Component } from 'react';
import { Container } from 'reactstrap';

class FullPageLayout extends Component {
  render() {
    return (
      <div>
        <main>
          <Container fluid className="content-area">
            {this.props.content}
          </Container>
        </main>
      </div>
    );
  }
}

export default FullPageLayout;