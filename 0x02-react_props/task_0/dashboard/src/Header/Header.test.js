import { shallow } from 'enzyme';
import Header from './Header';
import React from 'react';

describe("<Header />", () => {
	it('Header renders without crashing', () => {
	  const wrapper = shallow(<Header />);
	  expect(component).toBeDefined();
	});
	it('should render a div with the class App-header', () => {
	  const component = shallow(<Header />);
	  expect(wrapper.exists()).toEqual(true);
	});
})
