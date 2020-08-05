import moment from 'moment';
import classNames from 'classnames';
import React from 'react';

export const MessageCounter = ({ user, count }) => <div className="message-counter">{user} ({count} new messages)</div>;
export const UserInfo = ({ user }) => <div className="user-info">
  <i className="fas fa-chevron-left text-primary mr-4"/>
  <i className="fas fa-user-circle text-secondary fa-2x mr-2"/>
  <div className="user-info-inner">
    <h6 className="username my-0">{user}</h6>
    <span className="user-activity text-success my-0">Online</span>
  </div>
</div>;

export const DateGroup = ({ date }) => {
  return <li className="message-date-group text-center">
    <span className="badge badge-primary d-inline-block px-2">{date}</span>
  </li>;
};

export const MoreButton = ({ onClick }) => {
  return <li className="more-button-container text-center">
    <button onClick={onClick}>Load older messages</button>
  </li>;
};

export const MessageListItem = ({ message: { timestamp, text, direction, status } }) => {
  const time = moment(parseInt(timestamp)).format('LT');
  const hasStatus = !!status;
  const isOutGoing = !!direction && direction === 'out';
  const isSent = isOutGoing && hasStatus && status === 'sent';
  const isReceived = isOutGoing && hasStatus && status === 'received';
  const isRead = isOutGoing && hasStatus && status === 'read';

  return <li className="message-list-item">
    <div className={classNames('message-list-item-inner mb-1', { replies: !isOutGoing, sent: isOutGoing })}>
      <p className="text mb-0">{text}</p>
      <div className="message-meta text-right">
        <span>{time}</span>
        {isOutGoing && <i className={classNames('ml-1 fas', {
          'fa-check': isSent,
          'fa-check-double': isReceived || isRead,
          'text-primary': isRead,
        })}/>}

      </div>
    </div>
  </li>;
};
