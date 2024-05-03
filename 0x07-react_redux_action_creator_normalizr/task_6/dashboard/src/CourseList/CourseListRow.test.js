import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

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
	it("renders with correct inline styles when isHeader is true", () => {
		const wrapper = shallow(
			<CourseListRow
			isHeader={true}
			textFirstCell="test"
			textSecondCell="second"
			/>
		);

		const headerStyle = wrapper.find("tr");
		const expectedHeaderStyle = {
			backgroundColor: "#deb5b545",
		};

		expect(headerStyle.prop("style")).toEqual(expectedHeaderStyle);
	});
	it("renders with correct inline styles when isHeader is false", () => {
		const wrapper = shallow(
			<CourseListRow
			isHeader={false}
			textFirstCell="test"
                        textSecondCell="second"
                        />
                );

                const rowStyle = wrapper.find("tr");
                const expectedRowStyle = {
                        backgroundColor: "#deb5b545",
                };

                expect(rowStyle.prop("style")).toEqual(expectedRowStyle);
        });
});
