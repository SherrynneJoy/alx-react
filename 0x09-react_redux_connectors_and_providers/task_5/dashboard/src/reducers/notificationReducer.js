import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import immutable from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from '../actions/notificationActionCreators';
const { Map, setIn } = immutable;

export const initialState = {
        notifications: [],
        filter: 'DEFAULT'
}

export const notificationReducer = (state = initialState, action) => {
        switch (action.type) {
                case FETCH_NOTIFICATIONS_SUCCESS:
                        const data = notificationsNormalizer(action.data);
			return { ...state, notifications: mergeDeep(state.notifications, data.notifications) };
                case MARK_AS_READ:
                        return setIn(state, ['notifications', String(action.index), isRead], true);
                case SET_TYPE_FILTER:
                        return { ...state, action.filter };
		case SET_LOADING_STATE:
			return { ...state, loading: action.isLoading };
                default:
                        break;
        }
        return state;
}
