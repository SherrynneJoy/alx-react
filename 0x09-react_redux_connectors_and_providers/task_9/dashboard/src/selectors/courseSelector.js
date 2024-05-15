import { createSelector } from 'reselect';
import { List } from 'immutable';

export const getCoursesAsList = createSelector(
	(state) => state.courses.entities,
	(entities) => entities.valueSeq().toList()
);
