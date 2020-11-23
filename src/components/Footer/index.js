import React from 'react';
import ChatBox from '../../components/Chatbox';
import './Footer.css';

function Footer({ userInfo }) {
  return (
    <footer className="footer">
      <ChatBox userInfo={userInfo} />
      &copy; 2020 All right reserved.
    </footer>
  );
}

export default Footer;
