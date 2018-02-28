import React from 'react';
import ReactDOM from 'react-dom'

const CrawlEntry = (props) => (
  <ul key={props.bar.id} className="bar-entry"><a name={props.index} onClick={props.removebar}> x </a> {props.bar.name}</ul>
);

export default CrawlEntry;