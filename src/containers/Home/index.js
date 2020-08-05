import React, { Fragment, useState } from 'react';
import './Home.scss';
import { MessageListItem, DateGroup, MessageCounter, MoreButton, UserInfo } from "./partials";
import useChat from '../../utils/react-hooks/useChat';

const Home = props => {
  const {} = props;
  const [inputValue, setInputValue] = useState('');

  const { messages, groupedByDate, sendMessage, getMoreMessages, unreadCount, totalCount } = useChat();

  const messageGroups = groupedByDate(messages);

  const handleInputSubmit = () => {
    const text = inputValue.trim();
    if (text) {
      sendMessage(text);
      setInputValue('');
    }
  };
  const showMoreButton = messages.length < totalCount;
  return (
    <div className=" container-fluid">
      <div className=" row chat-wrapper">
        <div className=" chat-wrapper-inner">
          <MessageCounter user="user101" count={unreadCount} />
          <UserInfo user="user113" />
          <div className="message-list">
            <ul className="text-center">
              {showMoreButton && <MoreButton onClick={getMoreMessages}/>}
              {Object.keys(messageGroups).map(date => <Fragment key={date}>
                <DateGroup date={date}/>
                {messageGroups[date].map(message => <MessageListItem key={message.id} message={message}/>)}
              </Fragment>)}
            </ul>
          </div>
          <div className=" input-wrapper">
            <textarea placeholder="Send a message..." value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <div className=" send-wrapper">
              <button className="btn btn-link" onClick={handleInputSubmit}><i
                className="fas fa-arrow-circle-right text-primary fa-2x"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default Home;
