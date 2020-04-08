import React from 'react';
import { Col, FormGroup, Label } from 'reactstrap';

export default function FormRowAny(props) {
  return (
    <FormGroup row>
      <Label for={props.keyText} sm={props.leftCol}>
        {props.keyText}
      </Label>
      <Col sm={props.rightCol} className="d-flex align-items-center">
        {props.children}
      </Col>
    </FormGroup>
  );
}