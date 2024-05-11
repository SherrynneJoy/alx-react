import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import immutable from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const { Map } = immutable;

export default function courseReducer = (state = Map([]), action) => {
        switch (action.type) {
                case FETCH_COURSE_SUCCESS:
                        const data = coursesNormalizer(action.data);
                        Object.keys(data).map((key) => {
                                data[key].isSelected = false
                        })
                        return state.merge(data)
                case SELECT_COURSE:
                        return state.setIn([String(action.index), 'isSelected'], true)
                case UNSELECT_COURSE:
                        return state.setIn([String(action.index), 'isSelected'], false)
                default:
                        break;
        }
        return state;
};
