import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { expect as expectChai } from 'chai';

const _ = require('lodash');

describe("tests notificationReducer", () => {
	const initialState = {
		notifications: [],
		filter: 'DEFAULT',
	};
	const data = [
		{ id: 1, type: "default", value: "New course available" },
		{ id: 2, type: "urgent", value: "New resume available" },
		{ id: 3, type: "urgent", value: "New data available" }
	];

	const  state = {
		filter: "DEFAULT",
		notifications: [
			{ id: 1, isRead: false, type: "default", value: "New course available" },
			{ id: 2, isRead: false, type: "urgent", value: "New resume available" },
			{ id: 3, isRead: false, type: "urgent", value: "New data available" }
		]
	};
	it("tests that the default state returns the initialState", (done) => {
		const result = notificationReducer(undefined, { });
		expectChai(_.isEqual(result, initialState)).to.equal(true);
		done();
	});
	it('tests FETCH_NOTIFICATIONS_SUCCESS', () => {
		const result = notificationReducer(undefined, { type: FETCH_NOTIFICATIONS_SUCCESS, data: data });
		const expected = [
			{ id: 1, isRead: false, type: "default", value: "New course available" },
			{ id: 2, isRead: false, type: "urgent", value: "New resume available" },
			{ id: 3, isRead: false, type: "urgent", value: "New data available" }
		];
		expectChai(_.isEqual(result.notifications, expected)).to.equal(true);
		expectChai(result.filter).to.equal('DEFAULT');
		done();
	});
	it('tests MARK_AS_READ', () => {
		const result = notificationsReducer(state, { type: MARK_AS_READ, index: 2 });
		const expected = [
			{ id: 1, isRead: false, type: "default", value: "New course available" },
			{ id: 2, isRead: true, type: "urgent", value: "New resume available" },
			{ id: 3, isRead: false, type: "urgent", value: "New data available" }
		];
		expectChai(_.isEqual(result.notifications, expected)).to.equal(true);
		expectChai(result.filter).to.equal('DEFAULT');
		done();
	});
	it("tests SET_TYPE_FILTER", () => {
		const result = notificationReducer(state, { type: SET_TYPE_FILTER, filter: 'URGENT' });
		const expected = [
			{ id: 1, isRead: false, type: "default", value: "New course available" },
			{ id: 2, isRead: false, type: "urgent", value: "New resume available" },
			{ id: 3, isRead: false, type: "urgent", value: "New data available" }
		];
		expectChai(_.isEqual(result.notifications, expected)).to.equal(true);
		expectChai(result.filter).to.equal('URGENT');
		done();
	});
});
