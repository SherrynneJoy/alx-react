import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
        it('renders without crashing', () => {
                const wrapper = shallow(<Login />);
                expect(wrapper.exists()).toBe(true);
        });
        it('renders 2 input tags and 2 label tags', () => {
                const wrapper = shallow(<Login />);
                expect(wrapper.find('input')).to.have.lengthOf(2);
		expect(wrapper.find('label')).to.have.lengthOf(2);
        });
	it("verifies that the submit button is disabled by default", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find({ type: 'submit' }).props().disabled).toBe(true);
	});
	it("verifies that after changing the value of the two inputs, the button is enabled", () => {
		const wrapper = shallow(<Login />);
		wrapper.find({ id: 'email' }).simulate('change', { target: { name: 'email', value: 'jessie@gmail.com' } });
		wrapper.find({ id: 'password' }).simulate('change', { target: { name: 'password', value: 'jessie@1' } });
		expect(wrapper.find({ type: 'submit' }).props().disabled).toBe(false);
	});
});
