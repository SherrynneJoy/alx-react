import React from 'react';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	Notifications: {
		padding: "6px 12px",
		border: "4px solid grey"
	}
});
class Notification extends React.Component {
	constructor(props) {
	super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	shouldComponentUpdate(nextProps) {
		return (
			nextProps.listNotifications.length > this.props.listNotifications.length
		)
	}

	render() {
	  return (
		<>
			<div className="menuItem">
				<p>Your notifications</p>
			</div>
			{ this.props.displayDrawer ?
				(<div className={css(styles.Notifications)}>
					<button style={{
						position: 'absolute',
						background: 'transparent',
						border: 'none',
						right: '20px',
					}}
						aria-label='close'
						onClick={() => {
							console.log('Close button has been clicked');
						}}>
						<img src={close_icon} alt="close" height="15px" width="15px"></img>
					</button>
					<p>Here is the list of notifications</p>
					<ul>
					{this.props.listNotifications.length === 0 ? (<NotificationItem value='No new notification for now' type='no-new' />) : <></>}
					{this.props.listNotifications.map((not) => (<NotificationItem key={not.id} type={not.type} value={not.value} html={not.html} markAsRead={() => {this.markAsRead(not.id)}} />))}
            </ul>
					</ul>
				</div>)
				: <></>
			}
	)
}


Notification.defaultProps = {
	displayDrawer: false
}

Notification.propTypes = {
	displayDrawer: propTypes.bool
}

export default Notification
