import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';


describe("<CourseListRow />", () => {
	it("renders without crashing", () => {
		const wrapper = shallow(<CourseListRow textFirstCell="test"/>);
		expect(wrapper.exists()).toEqual(true);
	});
	it("renders one cell with colspan = 2 when textSecondCell does not exist when isHeader is true", () => {
		const wrapper = shallow(<CourseList isHeader={true} textFirstCell="test" />);
		expect(wrapper.find("th")).toHaveLength(1);
		expect(wrapper.find("th").prop("colSpan")).toEqual("2");
	});
	it("renders two cells when textSecondCell is present", () => {
		const wrapper = shallow(<CourseList isHeader={true} textFirstCell="test" textSecondCell="second" />);
		expect(wrapper.find("th")).toHaveLength(2);
		expect(wrapper.find("th").first().text()).toEqual("test");
		expect(wrapper.find("th").at(1).text()).toEqual("second");
	});
	it("renders correctly two td elements within a tr element when isHeader is false", () => {
		const wrapper = shallow(<CourseList isHeader={false} textFirstCell="test" textSecondCell="second" />);
		expect(wrapper.find("tr")).toHaveLength(1);
		expect(wrapper.find("tr").children("td")).toHaveLength(2);
	});
});
