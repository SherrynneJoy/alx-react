import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';


describe('Notifications tests', () => {
        it('renders Notification component without crashing', () => {
          const wrapper = shallow(<Notifications />);
	  expect(wrapper.exists()).toEqual(true);
	});
	it('renders three NotificationItem components', () => {
	  const wrapper = shallow(<Notifications />);
	  expect(wrapper.find("NotificationItem")).toBeDefined();
	  expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>'>;
	});
	it('renders correct text', () => {
	  const wrapper = shallow(<Notifications />);
	  expect(wrapper.find('.Notifications p').text()).toEqual(
		  'Here is the list of notifications'
	  );
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
});
