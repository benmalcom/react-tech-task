import React from 'react';
import './OfllineView.scss';

export default ({}) => (
  <div className="container">
    <div className="row">
      <div className="offline-view col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mx-auto text-center">
        <h1>
          <i className="fas fa-exclamation-triangle" /> You seem to be offline
        </h1>
        <p>
          We can't complete your request at this time, please check your network
          connection.
        </p>
      </div>
    </div>
  </div>
);
