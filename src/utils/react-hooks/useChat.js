import { useState, useEffect } from 'react';
import { groupBy } from 'lodash';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import dbData from '../../data/chats.json';

const LIMIT = 10;
export default () => {
  const [state, setState] = useState(() => {
    const data = dbData.sort((a, b) => parseInt(b.timestamp) - parseInt(a.timestamp));
    const length = data.length;
    return {
      loading: false,
      data,
      count: data.length,
      messages: data.slice(length - LIMIT, length),
    };
  });

  const groupedByDate = items => groupBy(items, item => moment(parseInt(item.timestamp))
    .startOf('day')
    .format('LL'));

  const getMoreMessages = () => {
    setState(state => {
      const length = state.data.length;
      const end = length - state.messages.length;
      const start = end - LIMIT;
      const newMessages = state.data.slice(start, end);
      return {
        ...state,
        messages: newMessages.concat(state.messages),
      };
    });
  };


  const sendMessage = text => {
    const payload = {
      id: uuid(),
      text,
      timestamp: Date.now(),
      status: 'sent',
      direction: 'out',
    };
    setState(state => ({
        ...state,
        data: [...state.data, payload],
        messages: [...state.messages, payload],
        count: state.data.length + 1,
    }));
  };

  const unreadCount = state.data.reduce((count, { direction, status }) => {
    count += direction === 'in' && status === 'received' ? 1 : 0;
    return count;
  }, 0);

  return {
    sendMessage,
    groupedByDate,
    getMoreMessages,
    totalCount: state.count,
    messages: state.messages,
    unreadCount,
  };
};
