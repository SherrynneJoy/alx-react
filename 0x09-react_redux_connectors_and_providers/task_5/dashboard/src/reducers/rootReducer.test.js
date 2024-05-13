import rootReducer from './rootReducer';

describe("tests rootReducer", () => {
        it("should return the initialState", () => {
                const initialState = rootReducer(undefined, {});
		expect(initialState).toEqual({
			courses: new Map(),
			notifications: new Map(),
			ui: new Map()
		});
        });
});
