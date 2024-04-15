import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
	 it('renders without crashing', () => {
                const wrapper = shallow(<NotificationItem />);
                expect(wrapper.exists()).toBe(true);
        });
	it('renders type and value props', () => {
		const wrapper = shallow(<NotificationItem type='default' value='test' />);
		const li = wrapper.find('li');
		expect(li).to.have.lengthOf(1);
		expect(li.text()).toEqual('test');
		expect(li.prop('data-notification-type')).toEqual('default');
	});
	it('renders html props', () => {
		const text = 'List of notifications';
		const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
		const li = wrapper.find('li');
		expect(li.html()).toEqual('<li><u>text</u></li>');
	});
	it('Tests that menuItem is rendered when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	});

	it('Tests the div Notifications is not rendered when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.Notifications').length).toBe(0);
	});

	it('Tests that menuItem is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
		expect(wrapper.find('.menuItem').length).toBe(1);
	});

	it('Tests that the div Notifications is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
		wrapper.update()
		const item = wrapper.find('div.Notifications');
		expect(item.length).toBe(1);
	});

	it('Tests when passing empty array', () => {
		const wrapper = shallow(<Notifications notifications={[]} />);
		expect(wrapper.find('.NotificationItem').length).toBe(0);
	});

	it('Tests when passing NO array', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('.NotificationItem').length).toBe(0);
	});
	it("calls markAsRead fn with the right console message when clicked", () => {
                const markAsReadMock = jest.fn();
                const id = 123;
                const wrapper = shallow(<NotificationItem id={id} markAsRead={markAsReadMock} />);
                wrapper.find('li').simulate('click');
                expect(markAsReadMock).toHaveBeenCalledWith(id);
        });
});
