import { shallow } from 'enzyme';
import React from 'react';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { fetchCourses, selectCourse, unSelectCourse } from './actions/courseActionCreators';

StyleSheetTestUtils.suppressStyleInjection();

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<CourseList />", () => {
	let store;
	let wrapper;

	beforeEach(() => {
		fetchMock.resetMocks();
		store = mockStore({
			courses: {
				entities: {}
			}
		});
		store.dispatch = jest.fn();
		wrapper = mount(
			<Provider store={store}>
			<CourseList />
			</Provider>
		);
	});
	it("renders CourseList component without crashing", () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.exists()).toEqual(true);
	});
	it("renders the 5 different rows", () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.find("CourseListRow")).toHaveLength(5);
		expect(wrapper.find("CourseListRow").at(0).prop("textFirstCell")).toEqual("Available courses");
		expect(wrapper.find("CourseListRow").at(0).prop("isHeader")).toEqual(true);
		expect(wrapper.find("CourseListRow").at(1).prop("textFirstCell")).toEqual("Course name");
		expect(wrapper.find("CourseListRow").at(1).prop("textSecondCell")).toEqual("Credit");
		expect(wrapper.find("CourseListRow").at(1).prop("isHeader")).toEqual(true);
		expect(wrapper.find("CourseListRow").at(2).prop("textFirstCell")).toEqual("ES6");
		expect(wrapper.find("CourseListRow").at(2).prop("textSecondCell")).toEqual("60");
		expect(wrapper.find("CourseListRow").at(2).prop("isHeader")).toEqual(false);
		expect(wrapper.find("CourseListRow").at(3).prop("textFirstCell")).toEqual("Webpack");
		expect(wrapper.find("CourseListRow").at(3).prop("textSecondCell")).toEqual("20");
		expect(wrapper.find("CourseListRow").at(3).prop("isHeader")).toEqual(false);
		expect(wrapper.find("CourseListRow").at(4).prop("textFirstCell")).toEqual("React");
		expect(wrapper.find("CourseListRow").at(4).prop("textSecondCell")).toEqual("40");
		expect(wrapper.find("CourseListRow").at(4).prop("isHeader")).toEqual(false);
	});
	it(`Renders several CourseListRow Components`, () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.find('CourseListRow').length).toBe(2);
	});
	it("dispatches fetchCourses action when component mounts", () => {
		expect(store.dispatch).toHaveBeenCalledTimes(1);
		expect(store.dispatch).toHaveBeenCalledWith(fetchCourses());
	});

	it("dispatches selectCourse action when onChangeRow is called with checked true", () => {
		const instance = wrapper.find(CourseList).instance();
		instance.onChangeRow = jest.fn();

		wrapper.find('input[type="checkbox"]').at(0).simulate('change', { target: { checked: true } });
		expect(instance.onChangeRow).toHaveBeenCalledWith('Course name', true);
		expect(store.dispatch).toHaveBeenCalledWith(selectCourse('Course name'));
	});
	it("dispatches unSelectCourse action when onChangeRow is called with checked false", () => {
		const instance = wrapper.find(CourseList).instance();
		instance.onChangeRow = jest.fn();

		wrapper.find('input[type="checkbox"]').at(0).simulate('change', { target: { checked: false } });

		expect(instance.onChangeRow).toHaveBeenCalledWith('Course name', false);
		expect(store.dispatch).toHaveBeenCalledWith(unSelectCourse('Course name'));
    });
});
