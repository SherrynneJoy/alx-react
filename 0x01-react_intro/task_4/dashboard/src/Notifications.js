import React from 'react';
import './Notifications.css';

export default function Notifications() {
  return (
    <div className="Notifications">
      <button
      style={{
	      position: 'absolute',
	      right: '4px',
      }}
      aria-label="Close"
      onClick={(e) => {
	      console.log('Close button has been clicked');
      }}
      >
      <img src={closeIcon} alt="closeIcon" />
      <p>Here is the list of notifications</p>
      <ul>
	  <li data-priority="default">New course available</li>
	  <li data-priority="urgent">New resume available</li>
	  <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  );
};
