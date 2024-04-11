import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists).toBe(true);
	});
	it('rendersNotificationItem', () => {
                const wrapper = shallow(<Notifications />);
                expect(wrapper.exists('NotificationItem')).toBe(true);
        });
	it('first NotificationItem renders the right html', () => {
                const wrapper = shallow(<Notifications />);
                expect(wrapper.html()).toContain('New course available');
        });
	it("renders menuitem when displayDrawer is false", () => {
	  const wrapper = shallow(<Notifications />);
	  expect(wrapper.find("div.menuItem")).toHaveLength(1);
	});
	it("renders nothing when isplayDrawer is false", () => {
	  const wrapper = shallow(<Notifications />);
	  expect(wrapper.find("div.Notifications")).toHaveLength(0);
	});
	it("renders menuitem when displayDrawer is true", () => {
	  const wrapper = shallow(<Notifications displayDrawer/>);
	  expect(wrapper.find("div.menuItem")).toHaveLength(1);
	});
	it("renders div.Notifications when displayDrawer is true", () => {
	  const wrapper = shallow(<Notifications displayDrawer/>);
	  expect(wrapper.find("div.Notifications")).toHaveLength(1);
	});
	it("mockup the console.log function", () => {
		const consoleLogSpy = jest.spyOn(console, 'log');
		const wrapper = shallow(<Notification />);
		const id = 123;
		wrapper.instance().markAsRead(id);
		expect(consoleLogSpy).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
		consoleLogSpy.mockRestore();
	});
});
