import {
  DEFAULT_VALUES,
  UPDATE_DATE
} from '../constants/types';

const INITIAL_STATE = {
  date: null,
  currency: null
};

export default  (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DEFAULT_VALUES:
      return {
        ...state,
        date: null,
        currency: null
      }
    case UPDATE_DATE:
      return {
        ...state,
        date: action.payload
      }
    default:
      return state;
  }
}
