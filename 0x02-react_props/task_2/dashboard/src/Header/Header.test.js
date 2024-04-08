import { shallow } from 'enzyme';
import Header from './Header';
import React from 'react';

describe("<Header />", () => {
	it('Header renders without crashing', () => {
	  const wrapper = shallow(<Header />);
	  expect(wrapper.exists()).toEqual(true);
	});
	it('should render a div with img', () => {
	  const wrapper = shallow(<Header />);
	  expect(wrapper.find("div.App-header img")).toHaveLength(1);
	});
	it('should render a h1 element', () => {
	  const wrapper = shallow(<Header />);
	  expect(wrapper.find("div.App-header h1")).toHaveLength(1);
	});
})
