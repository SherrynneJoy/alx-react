import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from "../utils/utils";
import closeButton from "../assets/close-icon.png";

export default function Notifications() {
  return (
    <div className="Notifications">
      <button style={{
        right: 30,
	border: 'none',
	position: 'absolute',
	background: 'transparent',
      }}
	aria-close="close"
	onClick={() => console.log('Close button has been clicked')}>
	<img src={closeButton} alt="close button icon" />
      </button>
        <p>Here is the list of notifications</p>
	<ul>
	  <NotificationItem type="default" value="New course available"/>
	  <NotificationItem type="urgent" value="New resume available"/>
	  <NotificationItem type="default" html={{__html: getLatestNotification() }} />
	</ul>
    </div>
  )
}
