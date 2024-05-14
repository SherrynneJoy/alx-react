import React from 'react';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import propTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const bounce = keyframes({
	'0%': {
		transform: 'translateY(0px)',
	},
	'50%': {
		transform: 'translateY(-5px)',
	},
	'100%': {
		tansform: 'translateY(5px)',
	},
});

const opacityAnimation = keframes({
	from: {
		opacity: 0.5,
	},
	to: {
		opacity: 1,
	},
});
const styles = StyleSheet.create({
	menuItem: {
		right: '20px',
		backgroundColor: '#fff8f8',
		position: 'absolute',
		cursor: 'pointer',
		padding: '10px',
		top: '20px',
		':hover': {
			`${opacityAnimation} 1s linear 3, ${bounce} 0.5s linear 3`
		},
	},
	Notifications: {
		padding: "6px 12px",
		border: "4px solid grey"
	},
	screenSize: {
		'@media (max-width: 900)': {
			float: 'none',
			fontSize: '20px'
		},
	},
	ulSize: {
		'@media (max-width: 900)': {
			padding: '0',
			listStyle: 'none'
	},
});
class Notification extends React.Component {
	constructor(props) {
	super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	componentDidMount() {
		this.props.fetchNotifications();
	}

	render() {
		const {
			handleDisplayDrawer,
      			handleHideDrawer,
      			displayDrawer,
      			listNotifications,
      			markNotificationAsRead,
		} = this.props;
	  return (
		<>
			<div className={css(styles.menuItem)} onClick={this.props.handleDisplayDrawer}>
				<p>Your notifications</p>
			</div>
			{ this.props.displayDrawer ?
				(<div className={css(styles.Notifications, styles.screenSize, styles.ulSize)}>
					<button style={{
						position: 'absolute',
						background: 'transparent',
						border: 'none',
						right: '20px',
					}}
						aria-label='close'
						onClick={(e) => {
							console.log('Close button has been clicked');
							this.props.handleHideDrawer();
						}}>
						<img src={close_icon} alt="close" height="15px" width="15px"></img>
					</button>
					<p>Here is the list of notifications</p>
					<ul>
					{this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value='No new notification for now' type='no-new' markAsRead={this.markAsRead} />) : <></>}
					{this.props.listNotifications.map((not) => (<NotificationItem id={item.id} key={item.id} type={item.type} value={item.value} html={item.html} markAsRead={this.props.markNotificationAsRead}/>))}
            </ul>
					</ul>
				</div>)
				: <></>
			}
	)
}


const mapStateToProps = (state) => ({
    listNotifications: state.notifications.list // Assuming notifications is the reducer managing notifications state
});

const mapDispatchToProps = {
    fetchNotifications // Map fetchNotifications action to the component
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
	handleDisplayDrawer: () => {},
	handleHideDrawer: () => {},
	markNotificationAsRead: () => {},
};

Notification.propTypes = {
	displayDrawer: propTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
	handleDisplayDrawer: PropTypes.func,
	handleHideDrawer: PropTypes.func,
	markNotificationAsRead: PropTypes.func,
};

export default Notification;
