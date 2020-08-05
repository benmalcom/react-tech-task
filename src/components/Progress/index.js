import React from 'react';
import './Progress.scss';

const Progress = ({ className, message, ...rest }) => (
    <div className={`Progress progress-spinner ${className || ''}`} {...rest}>
      <div className="bounce1"/>
      <div className="bounce2"/>
      <div className="bounce3"/>
      {message && <p className="progress-spinner-message">{message}</p>}
  </div>
);

export default Progress;
