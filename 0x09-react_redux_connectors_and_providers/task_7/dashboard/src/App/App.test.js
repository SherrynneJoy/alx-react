import React from 'react';
import { App, mapStateToProps }from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';
import { render, fireEvent } from '@testing-library/react';
import uiReducer from "../reducers/uiReducer";


StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
	const wrapper;
	beforeEach(() => {
		const store = createStore(uiReducer);
		wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
	});
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
	it("checks component behavior when isLoggedIn === true", () => {
    		const wrapper = shallow(<App />);
    		wrapper.setState({ user: loggedUser });
    		expect(wrapper.find(Login)).toHaveLength(0);
    		expect(wrapper.find(CourseList)).toHaveLength(1);
  	});
   	it("checks behavior of logOut", () => {
     		const map = {};
     		window.addEventListener = jest.fn().mockImplementation((event, cb) => {
       		map[event] = cb;
     	});
     	window.alert = jest.fn();
     	const testProps = {
        logOut: jest.fn()
     }
     	const wrapper = mount(<App isLoggedIn={true} {...testProps}/>);
     	map.keydown({key: "h", ctrlKey: true});
     	expect(window.alert).toHaveBeenCalledWith("Logging you out");
     	expect(testProps.logOut).toHaveBeenCalled();
     	window.alert.mockRestore();
   	});
   	it("verify default state for displayDrawer === false", () => {
    		const wrapper = shallow(<App />);
    		expect(wrapper.state().displayDrawer).toBe(false);
  	});

  	it("verify that after calling handleDisplayDrawer, the state === true", () => {
    		const wrapper = shallow(<App />);
    		wrapper.instance().handleDisplayDrawer();
    		expect(wrapper.state().displayDrawer).toBe(true);
  	});
  	it("verify that after calling handleHideDrawer, the state === false", () => {
    		const wrapper = shallow(<App />);
    		wrapper.setState({ displayDrawer: true });
    		wrapper.instance().handleHideDrawer();
    		expect(wrapper.state().displayDrawer).toBe(false);
  	});
  	it("verify that the logIn function updates the state correctly", () => {
    		const wrapper = shallow(<App />);
    		wrapper.instance().logIn(loggedUser.email, loggedUser.password);
    		expect(wrapper.state().user.email).toBe('diahancaroll@hotmail.com');
    		expect(wrapper.state().user.password).toBe('12345');
    		expect(wrapper.state().user.isLoggedIn).toBe(true);
  	});
  	it("verify that the logOut function updates the state correctly", () => {
    		const wrapper = shallow(<App />);
    		wrapper.setState({ user: loggedUser });
    		wrapper.state().logOut();
    		expect(wrapper.state().user.email).toBe('');
    		expect(wrapper.state().user.password).toBe('');
    		expect(wrapper.state().user.isLoggedIn).toBe(false);
  	});
	it('verify that markNotificationAsRead removes notification from listNotifications in state', () => {
		const wrapper = shallow(<App />);
		wrapper.setState({
			listNotifications: [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
				{ id: 3, type: "urgent", value: "New majors available" },
			]
		});
		wrapper.instance().markNotificationAsRead(2);
		expect(wrapper.state().listNotifications).toEqual([])
	});
	it("verifies that the function returns the right object", () => {
		let state = fromJS({
			isUserLoggedIn: true,
		});
		const result = mapStateToProps(state);
		expect(result).toEqual({ isLoggedIn: true })
	});
});
