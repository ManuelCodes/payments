import history from '../history';
import { CREATE_PAYMENT } from '../constants/types';
import jsonServer from '../apis/jsonServer';

export const createPayment = formValues => async (dispatch, getState) => {
  console.log('createPayment createPayment createPayment createPayment createPayment createPayment')
  console.log(formValues);
  console.log(dispatch);
  console.log(getState);
  const response = await jsonServer.post('/payments', { ...formValues });
  dispatch( {
    type: CREATE_PAYMENT,
    payload: response.data
  });
  history.push('/');
};
