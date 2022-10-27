import React from 'react';
import ReactDOM from 'react-dom/client';
import user from '../src/components/Profile/user.json';
import data from '../src/components/Statistic/data.json';
import friends from '../src/components/FriendList/friends.json';
import transactions from '../src/components/TransactionHistory/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistic/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics stats={data} title={'Uploads'} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
  </React.StrictMode>
);
