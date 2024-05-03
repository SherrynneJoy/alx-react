import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';


export default function login(email, password) {
	return {
		type: LOGIN,
		user: {
			email,
			password
		}
	};
};

export default function logout() {
	return {
		type: LOGOUT
	};
};

export default function displayNotificationDrawer() {
	return { type: DISPLAY_NOTIFICATION_DRAWER };
};

export default function hideNotificationDrawer() {
	return { type: HIDE_NOTIFICATION_DRAWER };
};
