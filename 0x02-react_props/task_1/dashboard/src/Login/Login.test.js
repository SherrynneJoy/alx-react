import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';


describe("<Login />", () => {
  it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("renders 2 input tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.body-login input")).toHaveLength(2);
  });
  it("renders 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("div.body-login label")).toHaveLength(2);
  });
})
