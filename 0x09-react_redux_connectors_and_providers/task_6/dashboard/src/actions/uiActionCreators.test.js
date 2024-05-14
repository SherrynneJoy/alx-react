import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe("test uiActions", () => {
	it("tests login function", () => {
		const user = { email: 'sherrynnejoy@gmail.com', password: 2748 };
		const data = { type: LOGIN, user };
		const result = login(user.email, user.password);
		expect(result).toEqual(data);
	});
	it("tests logout function", () => {
		const data = { type: LOGOUT };
		const result = logout();
		expect(result).toEqual(data);
	});
	it("tests displayNotificationDrawer function", () => {
		const data = { type: DISPLAY_NOTIFICATION_DRAWER };
		const result = displayNotificationDrawer();
		expect(result).toEqual(data);
	});
	it("tests hideNotificationDrawer function", () => {
		const data = { type: HIDE_NOTIFICATION_DRAWER };
                const result = hideNotificationDrawer();
                expect(result).toEqual(data);
	});
});
