import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActions';

jest.mock('../actions/notificationActions', () => ({
    fetchNotifications: jest.fn(),
}));

describe('<NotificationsContainer />', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch notifications on mount', () => {
        const wrapper = shallow(<NotificationsContainer fetchNotifications={fetchNotifications} />);
        expect(fetchNotifications).toHaveBeenCalled();
    });
});
