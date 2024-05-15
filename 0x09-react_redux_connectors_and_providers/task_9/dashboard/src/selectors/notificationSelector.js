export default function filterTypeSelected(data) {
	return data.get('filter');
}

export default function getNotifications(data) {
	return data.get('notification')
}

export default const getUnreadNotificationsByType = createSelector(
	[filterTypeSelected, getNotifications],
	(filter, notifications) => {
		const notificationsList = notifications.toJS();
		const unreaadNotifications = notificationsList.filter(notification => !notification.isRead);

		if (filter == 'urgent') {
			return unreadNotifications.filter(notification => notification.isUrgent);
		}
		return unreadNotifications;
	}
)
