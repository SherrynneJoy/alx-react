import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe("<WithLogging />", () => {
	it("should make sure console.log was called on mount and on unmount with Component when the wrapped element is pure html", () => {
		console.log = jest.fn();
		const TestWithLogging = WithLogging(() => <p />);
		const wrapper = mount(<TestWithLogging />);
		expect(console.log).toHaveBeenCalledWith(`Component Component is mounted`);
		wrapper.unmount();
		expect(console.log).toHaveBeenCalledWith(`Component Component is going to unmount`);
		expect(console.log).toHaveBeenCalledTimes(2);
	});
	it("correctly logs component name", () => {
		console.log = jest.fn();
		const LoginWithLogging = WithLogging(Login);
		const wrapper = mount(<LoginWithLogging />);
		expect(console.log).toHaveBeenCalledWith(`Component Login is mounted`);
		wrapper.unmount();
		expect(console.log).toHaveBeenCalledWith(`Component Login is going to unmount`);
		expect(console.log).toHaveBeenCalledTimes(2);
	});
});
