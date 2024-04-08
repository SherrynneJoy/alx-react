import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe("App tests", () => {
        it("renders without crashing", () => {
          const wrapper = shallow(<App />);
          expect(wrapper.exists()).toEqual(true);
        });
        it("renders the Notifications component", () => {
          const wrapper = shallow(<App />);
          expect(wrapper.find("Notifications").toHaveLength(1);
        });
        it("renders Header component", () => {
          const wrapper = shallow(<App />);
          expect(wrapper.find("Header").toHaveLength(1);
        });
        it("renders Login component", () => {
          const wrapper = shallow(<App />);
          expect(wrapper.find("Login")).toHaveLength(1);
        });
        it("renders Footer component", () => {
          const wrapper = shallow(<App />);
          expect(wrapper.find("Footer")).toHaveLength(1);
        });
});
