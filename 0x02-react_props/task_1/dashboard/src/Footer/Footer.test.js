import Footer from './Footer';
import { shallow } from 'enzyme';
import React from 'react';

describe("<Footer />", () => {
        it("Footer renders without crashing", () => {
          const wrapper = shallow(<Footer />);
          expect(wrapper.exists()).toEqual(true);
        });
	it("renders the text Copyright", () => {
	  const wrapper = shallow(<Footer />);
	  expect(wrapper.find("div.App-footer p")).toHaveLength(1);
	  expect(wrapper.find("div.App-footer p").text()).toContain("Copyright");
	});
})
