import immutable from 'immutable';

export default function accessImmutableObject(object, array) {
  if (object instanceof immutable.Map) {
    let curr = object;
    for (let i = 0; i < array.length; i++) {
      curr = curr.get(array[i]);
      if (curr === undefined) {
        return undefined;
      }
    }
    return curr;
  } else {
    let curr = object;
    for (let i = 0; i < array.length; i++) {
      curr = curr[array[i]];
      if (curr === undefined) {
        return undefined;
      }
    }
    return curr;
  }
}
