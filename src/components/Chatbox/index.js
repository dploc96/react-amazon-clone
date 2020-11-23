import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect, useRef, useState } from 'react';
import './Chatbox.css';

function ChatBox(props) {
  const uiMessagesRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messageBody, setMessageBody] = useState('');

  useEffect(() => {
    if (uiMessagesRef.current) {
      uiMessagesRef.current.scrollBy({
        top: uiMessagesRef.current.clientHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [isOpen]);

  const supportHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className="chatbox">
      {!isOpen ? (
        <button type="button" onClick={supportHandler}>
          <HelpOutlineIcon />
        </button>
      ) : (
        <div className="chatbox__cartBody">
          <div className="chatbox__row">
            <strong>Support </strong>
            <CloseIcon className="chatbox__closeIcon" onClick={closeHandler} />
          </div>
          <ul ref={uiMessagesRef}>
            <li>
              <strong>Admin: </strong> Hello there, Please ask your question.
            </li>
          </ul>
          <div>
            <form onSubmit="" className="chatbox__row">
              <input
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                type="text"
                placeholder="type message"
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
