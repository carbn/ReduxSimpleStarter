import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // Do NOT use .push() as it mutates the original state
      return [ action.payload.data, ...state ];
      // return state.push(action.payload.data);
  }
  return state;
}
