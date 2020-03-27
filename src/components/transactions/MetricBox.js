import React from 'react';
import './MetricBox.scss';

export default function MetricBox(props) {
  return (
    <div className="metric-box" md="4">
      <div>
        <img src={props.icon} alt={props.metric} />
        <span className="value">{props.value}</span>
      </div>
      <span className="key">{props.metric}</span>
    </div>
  );
}