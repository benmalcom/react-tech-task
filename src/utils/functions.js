import * as moment from 'moment-timezone';
import React, { Fragment } from 'react';
import get from 'lodash/get';

export const searchDateArray = (count = 7, startDate) => {
  const array = [];
  let current = moment().tz('Africa/Lagos');
  if (startDate) {
    current = moment(startDate)
      .tz('Africa/Lagos')
      .add(1, 'days');
  }
  for (let i = 0; i < count; i++) {
    const dateData = {
      value: current.format('YYYY-MM-DD'),
      label: current.format('dddd, DD MMM YYYY'),
    };
    current.date(current.date() + 1);
    array.push(dateData);
  }
  return array;
};

export const formatMessagesFromError = error => {
  let message = <span>{error.message}</span>;
  if (error.messages) {
    message = error.message && <h6 className="mb-0"> {error.message}</h6>;
  }
  return (
    <>
      {message}
      {error.messages && (
        <ul className="pl-1">
          {Object.keys(error.messages).map(item => {
            return (
              Array.isArray(error.messages[item]) &&
              error.messages[item].map((item2, i) => <li key={i}>{item2}</li>)
            );
          })}
        </ul>
      )}
    </>
  );
};
