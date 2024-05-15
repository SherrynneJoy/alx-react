import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export default function selectCourse(index) {
	return { type: SELECT_COURSE, index }
};

export const boundselectCourse = (index) => dispatch(selectCourse(index));

export default function unSelectCourse(index) {
	return { type: UNSELECT_COURSE, index }
};

export const boundunselectCourse = (index) => dispatch(unselectCourse(index));

export default function fetchCourses() {
	return async (dispatch) => {
		try {
			const response = await fetch('/dist/courses.json');
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			dispatch(setCourses(data));
		} catch (error) {
			console.error('Failed to fetch courses:', error);
		}
	};
};
