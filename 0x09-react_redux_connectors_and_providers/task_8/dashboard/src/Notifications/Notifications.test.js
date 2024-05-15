import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

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
	it('verifies that when updating the props of the component with the same list, the component doesn’t rerender', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
		const myComponentUpdate = jest.spyOn(Notifications.prototype, 'myComponentUpdate');
		wrapper.setProps({ listNotifications: listNotificationsNoUpdated });
		expect(myComponentUpdate).toHaveBeenCalled();
		expect(myComponentUpdate).toHaveLastReturnedWith(false);
	});
	it('verifies that when updating the props of the component with the longer list, the component doesn’t rerender', () => {
                const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
                const myComponentUpdate = jest.spyOn(Notifications.prototype, 'myComponentUpdate');
                wrapper.setProps({ listNotifications: listNotificationsNoUpdated });
                expect(myComponentUpdate).toHaveBeenCalled();
                expect(myComponentUpdate).toHaveLastReturnedWith(true);
        });
	it("verifies that clicking on the menu item calls handleDisplayDrawer", () => {
		const handleDisplayDrawer = jest.fn();
		const handleHideDrawer = jest.fn();

		const wrapper = shallow(
			<Notifications
			handleDisplayDrawer={handleDisplayDrawer}
			handleHideDrawer={handleHideDrawer}
			/>
		);

		wrapper.find("#menuItem").simulate("click");

		expect(handleDisplayDrawer).toHaveBeenCalled();
		expect(handlHideDrawer).not.toHaveBeenCalled();

		jest.restoreAllMocks();
	});
	it("verifies that clicking on the button calls handleHideDrawer", () => {
		const handleDisplayDrawer = jest.fn();
                const handleHideDrawer = jest.fn();

		const wrapper = shallow(
                        <Notifications
			displayDrawer
                        handleDisplayDrawer={handleDisplayDrawer}
                        handleHideDrawer={handleHideDrawer}
                        />
                );

		wrapper.find("#closeNotifications").simulate("click");

                expect(handleDisplayDrawer).not.toHaveBeenCalled();
                expect(handlHideDrawer).toHaveBeenCalled();

                jest.restoreAllMocks();
	});
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
