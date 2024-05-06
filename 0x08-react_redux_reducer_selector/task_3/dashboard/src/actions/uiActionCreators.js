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

export const boundlogin = (email, passsword) => dispatch(login(email, password));
export default function logout() {
	return {
		type: LOGOUT
	};
};
 export const boundlogout = () => dispatch(logout());

export default function displayNotificationDrawer() {
	return { type: DISPLAY_NOTIFICATION_DRAWER };
};

export const bounddisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export default function hideNotificationDrawer() {
	return { type: HIDE_NOTIFICATION_DRAWER };
};

export const boundhideNotificationDrawer = () => dispatch(hideNotificationDrawer());

export default function loginSuccess() {
	return { type: LOGIN_SUCCESS };
};

export default function loginFailure() {
	reurn { type: LOGIN_FAILURE };
};

export default function loginRequest(email, password) {
	return function (dispatch) {
		dispatch(login(email, password));
		return fetch('http://localhost:3000/login-success.json')
		.then((response) => response.json())
		.then((json) => dispatch(loginSuccess()))
		.catch((err) => dispatch(loginFailure()))
	};
}
