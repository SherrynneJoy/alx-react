import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications, setNotificationFilter } from '../actions/notificationActions';
import { getUnreadNotificationsByType } from '../selectors/notificationSelectors';
import PropTypes from 'prop-types';

class NotificationsContainer extends Component {
    componentDidMount() {
        this.props.fetchNotifications();
    }

    render() {
        const { displayDrawer, handleDisplayDrawer, handleHideDrawer, listNotifications, setNotificationFilter } = this.props;

        return (
            <Notifications
                displayDrawer={displayDrawer}
                handleDisplayDrawer={handleDisplayDrawer}
                handleHideDrawer={handleHideDrawer}
                listNotifications={listNotifications}
                setNotificationFilter={setNotificationFilter}
            />
        );
    }
}

NotificationsContainer.propTypes = {
    displayDrawer: PropTypes.bool.isRequired,
    handleDisplayDrawer: PropTypes.func.isRequired,
    handleHideDrawer: PropTypes.func.isRequired,
    listNotifications: PropTypes.array.isRequired,
    fetchNotifications: PropTypes.func.isRequired,
    setNotificationFilter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    listNotifications: getUnreadNotificationsByType(state),
    displayDrawer: state.ui.displayDrawer
});

const mapDispatchToProps = {
    fetchNotifications,
    setNotificationFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
