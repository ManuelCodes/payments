import _ from 'lodash';
import {
  CREATE_PAYMENT,
  FETCH_PAYMENTS,
  FETCH_PAYMENT,
  EDIT_PAYMENT,
  DELETE_PAYMENT
} from '../constants/types';


export default  (state = {}, action) => {
  switch(action.type) {
    case CREATE_PAYMENT:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_PAYMENT:
      //return { ...state, [action.payload.id]: action.payload }
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_PAYMENTS:
      return {...state, ...action.payload};
    case EDIT_PAYMENT:
        return { ...state, [action.payload.id]: action.payload };
    case DELETE_PAYMENT:
        return _.omit(state, action.payload);
    default:
      return state;
  }
}
