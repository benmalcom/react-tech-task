import React from 'react';
import './ShadowedBoxContainer.scss';
export default ({ children, className, ...rest }) => (
  <div className={`${className || ''} ShadowedBoxContainer`.trim()} {...rest}>
    {children}
  </div>
);
