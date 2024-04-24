import immutable from 'immutable';

const { Map }  = immutable;

export defualt function getImmutableObject(object) {
  return Map(object);
}
