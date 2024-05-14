import { fromJS } from 'immutable';
import { getCoursesAsList } from './courseSelector';

const mockState = {
	courses: {
		entities: fromJS({
			'1': { id: '1', name: 'Course 1' },
			'2': { id: '2', name: 'Course 2' },
			'3': { id: '3', name: 'Course 3' },
		})
	}
}

describe("tests getCoursesAsList selector" () => {
	it("should return all courses as a list", () => {
		const expectedList = fromJS([
			{ id: '1', name: 'Course 1' },
			{ id: '2', name: 'Course 2' },
			{ id: '3', name: 'Course 3' }
		]);

		const result = getCoursesAsList(mockState);
		expect(result).toEqual(expectedList);
	});
	it("should return an empty List if no courses are present", () => {
		const emptySpace = {
			courses: {
				entities: fromJS({})
			}
		};
		const expectedList = fromJS([]);
		const result = getCoursesAsList(emptyState);
		expect(result).toEqual(expectedList);
	});
});
