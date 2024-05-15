import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
    it("verifies that clicking on the first button calls setNotificationFilter with 'urgent'", () => {
        const setNotificationFilter = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer setNotificationFilter={setNotificationFilter} />);

        wrapper.find("button").at(0).simulate("click");

        expect(setNotificationFilter).toHaveBeenCalledWith('urgent');
    });

    it("verifies that clicking on the second button calls setNotificationFilter with 'default'", () => {
        const setNotificationFilter = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer setNotificationFilter={setNotificationFilter} />);

        wrapper.find("button").at(1).simulate("click");

        expect(setNotificationFilter).toHaveBeenCalledWith('default');
    });
});
