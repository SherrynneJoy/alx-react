import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { markAsAread, setNotificationFilter } from './notificationActionCreators';

decsribe("notification actions", () => {
	it("tests markAsRead action calling", () => {
		const data = {
			type: MARK_AS_READ,
			index: 1,
		};
		const result = markAsRead(1);
		expect(result).toEqual(data);
	});
	it("tests setNotificationFilte action calling", () => {
		const data = {
			type: SET_TYPE_FILTER,
			filter: "DEFAULT",
		};
		const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
		expect(result).toEqual(data);
	});
});
