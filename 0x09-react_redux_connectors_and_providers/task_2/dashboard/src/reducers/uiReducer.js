import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import Immutable from 'immutable';


const { Map } = immutable;

export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
}

export const  uiReducer = (state = initialState, action) => {
	state = Map(state);
    switch (action.type) {
        case actions.DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true)
        case actions.HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false)
        case actions.LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true)
        case actions.LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false)
	case actions.LOGIN:
	    return state.set("user", action.user);
        case actions.LOGOUT:
            return state.merge({
		    isUserLoggedIn: false,
		    user: null
	    });
        default:
            break;
    }
    return state;
};
