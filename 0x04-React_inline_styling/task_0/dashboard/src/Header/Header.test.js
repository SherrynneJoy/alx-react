import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
	it('renders  without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toBe(true);
	})
	it('tests that the components render img and h1 tags', () => {
                const wrapper = shallow(<Header />);
                expect(wrapper.exists('img')).toBe(true);
		expect(wrapper.exists('h1')).toBe(true);
        })
})
