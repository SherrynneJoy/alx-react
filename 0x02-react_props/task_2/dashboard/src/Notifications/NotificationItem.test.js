import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';


describe("<Notifications />", () => {
	it("renders without crashing", () => {
	  const wrapper = shallow(<Notifications />);
	  expect(wrapper.exists()).toEqual(true);
	});
	it("renders the correct html page", () => {
	  const wrapper = shallow(<NotificationItem type="default" value="test" />);
	  expect(wrapper.find("li")).toHaveLength(1);
	  expect(wrapper.find("li").text()).toEqual("test");
	  expect(wrapper.find("li").prop("data-notification-type")).toEqual("default");
	});
	it("renders correct html when passing dummy html", () => {
	  const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
	  expect(wrapper.find("li").html()).toEqual("<li><u>test</u></li>");
	});
});
