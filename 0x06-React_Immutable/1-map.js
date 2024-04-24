import immutable from 'immutable';

const { Map }  = immutable;

export default function getImmutableObject(object) {
  return Map(object);
}
