import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export default function selectCourse(index) {
	return { type: SELECT_COURSE, index }
};

export const boundselectCourse = (index) => dispatch(selectCourse(index));

export default function unSelectCourse(index) {
	return { type: UNSELECT_COURSE, index }
};

export const boundunselectCourse = (index) => dispatch(unselectCourse(index));
