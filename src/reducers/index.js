import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import paymentReducer from './paymentReducer';

export default combineReducers({
  form: formReducer,
  payments: paymentReducer
});
