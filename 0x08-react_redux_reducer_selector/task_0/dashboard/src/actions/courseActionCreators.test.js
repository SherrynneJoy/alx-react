import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';


describe('actions', () => {
        it("tests selectCourse action", () => {
		const result = selectCourse(1);
		expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
	});
	it("tests unselectCourse action", () => {
		const result = unselectCourse(1);
                expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
	});
});
