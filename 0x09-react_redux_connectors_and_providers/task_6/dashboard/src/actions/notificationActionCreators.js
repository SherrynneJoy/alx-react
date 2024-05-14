import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export default function markAsAread(index) {
	return { type: MARK_AS_READ, index };
};

export const boundmarkAsRead = (index) => dispatch(markAsRead(index));

export default function setNotificationFilter(filter) {
	return { type: SET_TYPE_FILTER, filter };
};

export const boundsetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));

export default function setLoadingState(isLoading) {
	return { type: SET_LOADING_STATE, isLoading };
}

export default function setNotifications(notifications) {
	return { type: FETCH_NOTIFICATIONS_SUCCESS, notifications };
}

export default function fetchNotifications() {
	return async (dispatch) => {
		dispatch(setLoadingState(true));
		
		try {
			const response = await fetch('/notifications.json');
			const data = await response.json();

			dispatch(setNotifications(data));
		} catch (error) {
		
		} finally {
			dispatch(setLoadingState(false));
		}
	};
}
