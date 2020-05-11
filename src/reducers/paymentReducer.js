import {
  CREATE_PAYMENT,
  FETCH_PAYMENTS,
  FETCH_PAYMENT,
  EDIT_PAYMENT,
  DELETE_PAYMENT
} from '../constants/types';


export default  (state = { paymentsList: [] }, action) => {

  switch(action.type) {
    case CREATE_PAYMENT:
      return state;
    case FETCH_PAYMENT:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_PAYMENTS:
      return { ...state, 'paymentsList': action.payload };
    case EDIT_PAYMENT:
      return state;
    case DELETE_PAYMENT:
        return { ...state, 'paymentsList': action.payload };
    default:
      return state;
  }
}
