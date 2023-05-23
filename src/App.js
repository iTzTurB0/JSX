import React from 'react';
import './style.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div className="app">
      <h1>My Profile</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
