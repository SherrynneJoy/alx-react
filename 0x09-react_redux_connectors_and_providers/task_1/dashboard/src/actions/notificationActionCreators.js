import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export default function markAsAread(index) {
	return { type: MARK_AS_READ, index };
};

export const boundmarkAsRead = (index) => dispatch(markAsRead(index));

export default function setNotificationFilter(filter) {
	return { type: SET_TYPE_FILTER, filter };
};

export const boundsetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));
