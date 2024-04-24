import immutable from 'immutable';

const { fromJS } = immutable;
export default function getImmutableObject(object) {
  return fromJS(object);
}
