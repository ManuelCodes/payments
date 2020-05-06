import {
  CREATE_PAYMENT
} from '../constants/types';

const INITIAL_STATE = {
  date: null,
  currency: null
};

export default  (state = INITIAL_STATE, action) => {
  console.log("reducer reducer reducer reducer");
  console.log(action);
  switch(action.type) {
    case CREATE_PAYMENT:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}
