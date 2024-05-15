import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { notificationReducer } from '../reducers/notificationReducer';
import { expect as expectChai } from 'chai';

var _ = require('lodash');
const { Map, fromJS } = require('immutable');

describe("tests for notificationSelector", () => {
	const data = [
		{ id: 1, type: "default", value: "New course available" },
		{ id: 2, type: "urgent", value: "New resume available" },
		{ id: 3, type: "urgent", value: "New data available" }
	];
	const state = fromJS({
		filter: "DEFAULT",
		notifications: notificationsNormalizer([
			{ id: 1, isRead: false, type: "default", value: "New course available" },
			{ id: 2, isRead: false, type: "urgent", value: "New resume available" },
			{ id: 3, isRead: false, type: "urgent", value: "New data available" }
		]).notifications
	});
	it("tests that filterTypeSelected works well", (done) => {
		const result = filterTypeSelected(notificationReducer(undefined, {}));
		expectChai(_.isEqual(result, 'DEFAULT')).to.equal(true);
		done();
	});
	it("tests that getNotifications returns a list of the message entities within the reducer", (done) => {
		const result = getNotifications(notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: data }));
		const expected = notificationsNormalizer([
			{ id: 1, isRead: false, type: "default", value: "New course available" },
			{ id: 2, isRead: false, type: "urgent", value: "New resume available" },
			{ id: 3, isRead: false, type: "urgent", value: "New data available" }
		]);
		expectChai(_.isEqual(result, expected.notifications)).to.equal(true);
		done();
	});
	it("tests that that getUnreadNotifications return a list of the message entities within the reducer", (done) => {
		const result = getUnreadNotifications(notificationReducer(state, { type: MARK_AS_READ, index: 2 }));
		const expected = [
			{ id: 2, isRead: true, type: 'urgent', value: 'New resume available' }
		];
		expectChai(_.isEqual(result, expected)).to.equal(true);
		done();
	});
	it("tests that getUnreadNotificationsByType returns unread notifications when filter is DEFAULT", (done) => {
        const result = getUnreadNotificationsByType(state);
        const expected = [
		{ id: 1, isRead: false, type: "default", value: "New course available" },
		{ id: 2, isRead: false, type: "urgent", value: "New resume available" },
		{ id: 3, isRead: false, type: "urgent", value: "New data available" }
	];
		expectChai(_.isEqual(result, expected)).to.equal(true);
		done();
	});

	it("tests that getUnreadNotificationsByType returns unread urgent notifications when filter is URGENT", (done) => {
		const urgentState = state.set('filter', 'urgent');
		const result = getUnreadNotificationsByType(urgentState);
		const expected = [
			{ id: 2, isRead: false, type: "urgent", value: "New resume available" },
			{ id: 3, isRead: false, type: "urgent", value: "New data available" }
		];
		expectChai(_.isEqual(result, expected)).to.equal(true);
		done();
	});

	it("tests that getUnreadNotificationsByType returns an empty list when all notifications are read and filter is DEFAULT", (done) => {
		const allReadState = state.setIn(['notifications', '1', 'isRead'], true)
			.setIn(['notifications', '2', 'isRead'], true)
			.setIn(['notifications', '3', 'isRead'], true);
		const result = getUnreadNotificationsByType(allReadState);
		expectChai(result).to.deep.equal([]);
		done();
	});

	it("tests that getUnreadNotificationsByType returns an empty list when all notifications are read and filter is URGENT", (done) => {
		const allReadState = state.setIn(['notifications', '1', 'isRead'], true)
			.setIn(['notifications', '2', 'isRead'], true)
			.setIn(['notifications', '3', 'isRead'], true)
			.set('filter', 'urgent');
		const result = getUnreadNotificationsByType(allReadState);
		expectChai(result).to.deep.equal([]);
		done();
	});
});
