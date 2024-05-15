import React from 'react';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { keyframes } from 'aphrodite';

const bounce = keyframes({
    '0%': {
        transform: 'translateY(0px)',
    },
    '50%': {
        transform: 'translateY(-5px)',
    },
    '100%': {
        transform: 'translateY(5px)',
    },
});

const opacityAnimation = keyframes({
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
            animation: `${opacityAnimation} 1s linear 3, ${bounce} 0.5s linear 3`,
        },
    },
    Notifications: {
        padding: "6px 12px",
        border: "4px solid grey",
    },
    screenSize: {
        '@media (max-width: 900px)': {
            float: 'none',
            fontSize: '20px',
        },
    },
    ulSize: {
        '@media (max-width: 900px)': {
            padding: '0',
            listStyle: 'none',
        },
    },
});

class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        this.props.markNotificationAsRead(id);
    }

    render() {
        const { handleDisplayDrawer, handleHideDrawer, displayDrawer, listNotifications, setNotificationFilter } = this.props;

        return (
            <>
                <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className={css(styles.Notifications, styles.screenSize, styles.ulSize)}>
                        <button
                            style={{
                                position: 'absolute',
                                background: 'transparent',
                                border: 'none',
                                right: '20px',
                            }}
                            aria-label='close'
                            onClick={() => {
                                console.log('Close button has been clicked');
                                handleHideDrawer();
                            }}
                        >
                            <img src={close_icon} alt="close" height="15px" width="15px" />
                        </button>
                        <p>Here is the list of notifications</p>
                        <button onClick={() => setNotificationFilter('urgent')}>‼️</button>
                        <button onClick={() => setNotificationFilter('default')}>💠</button>
                        <ul>
                            {listNotifications.length === 0 ? (
                                <NotificationItem id={0} value='No new notification for now' type='no-new' markAsRead={this.markAsRead} />
                            ) : (
                                listNotifications.map((item) => (
                                    <NotificationItem
                                        key={item.id}
                                        id={item.id}
                                        type={item.type}
                                        value={item.value}
                                        html={item.html}
                                        markAsRead={this.markAsRead}
                                    />
                                ))
                            )}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {},
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    setNotificationFilter: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
};

export default Notifications;
