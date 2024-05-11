export default function filterTypeSelected(data) {
	return data.get('filter');
}

export default function getNotifications(data) {
	return data.get('notification')
}

export default function getUnreadNotifications(data) {
	const notification = Object.values(getNotifications(data).toJS())
	return notification.filter((not) => {
		not.isRead
	})
}
