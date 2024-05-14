// actions/courseActionCreators.test.js

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { selectCourse, unSelectCourse, fetchCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { setCourses } from './courseActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockCourses = [
  { id: '1', name: 'Course 1' },
  { id: '2', name: 'Course 2' },
  { id: '3', name: 'Course 3' },
];

fetchMock.enableMocks();

describe('courseActionCreators', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('tests selectCourse action', () => {
    const result = selectCourse(1);
    expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('tests unSelectCourse action', () => {
    const result = unSelectCourse(1);
    expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });

  it('dispatches setCourses action with fetched data', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockCourses));

    const expectedActions = [
      { type: setCourses().type, payload: mockCourses }
    ];

    const store = mockStore({ courses: {} });

    await store.dispatch(fetchCourses());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('handles fetch failure', async () => {
    fetch.mockRejectOnce(new Error('Network response was not ok'));

    const store = mockStore({ courses: {} });

    await store.dispatch(fetchCourses());

    expect(store.getActions()).toEqual([]);
  });
});

