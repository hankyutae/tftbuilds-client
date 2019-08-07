import React from 'react';
import './ValidationError.css';

export default function ValidationError(props) {
  if(props.message) {
    return (
      <div className="validation-error">{props.message}</div>
    );
  }

  return <></>
}