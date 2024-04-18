import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';
import { render, fireEvent } from '@testing-library/react';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
	it('renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	})
	it('contains Notifications', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.contains(<Notifications />)).toBe(true);
        })
	it('contains Header', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.find('Header')).to.have.lengthOf(1);
        })
	it('contains Login', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.contains(<Login />)).toBe(true);
        })
	it('contains Footer', () => {
                const wrapper = shallow(<App />);
                expect(wrapper.find('Footer')).to.have.lengthOf(1);
        })
	it("renders that CourseList is not displayed", () => {
	  const wrapper = shallow(<App />);
	  expect(wrapper.find("CourseList")).toHaveLength(0);
	});
	it("renders two checks when isLoggedIn is true", () => {
	  const wrapper = shallow(<App />);
	  expect(wrapper.find("Login")).toHaveLength(0);
	  expect(wrapper.find("CourseList")).toHaveLength(1);
	});
	it("calls logOut function when Ctrl + h keys are pressed", () => {
	  const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
	  document.dispatchEvent(event);
	  expect(mockLogOut).toHaveBeenCalled();
	  expect(window.alert).toHaveBeenCalledWith('Logging you out');
	});
	it("verifies that the default state for displayDrawer is false", () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state().displayDrawer).toEqual(false);
	});
	it("verifies that after calling handleDisplayDrawer, the state should now be true", () => {
		const wrapper = shallow(<App />);
                expect(wrapper.state().displayDrawer).toEqual(false);

		const instance = wrapper.instance();
		instance.handleDisplayDrawer();
		expect(wrapper.state().displayDrawer).toEqual(true);
	});
	it("verifies that after calling handleHideDrawer, the state is updated to be false", () => {
		const wrapper = shallow(<App />);
                expect(wrapper.state().displayDrawer).toEqual(false);

		// const instance = wrapper.instance();
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state().displayDrawer).toEqual(true);
                wrapper.instance().handleHideDrawer();
		expect(wrapper.state().displayDrawer).toEqual(false);
	});
});
