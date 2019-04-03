import React from 'react';

export default props => (
  <button className={`btn btn-${props.classButton}`} onClick={props.handleClick}>
    <i className={`fa fa-${props.icon}`}></i>
  </button>
);
