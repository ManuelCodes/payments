import history from '../history';
import {
  CREATE_PAYMENT,
  FETCH_PAYMENTS,
  EDIT_PAYMENT,
  DELETE_PAYMENT
} from '../constants/types';
import jsonServer from '../apis/jsonServer';

export const createPayment = formValues => async (dispatch, getState) => {
  const response = await jsonServer.post('/payments', { ...formValues });
  dispatch( {
    type: CREATE_PAYMENT,
    payload: response.data
  });
  history.push('/');
};

export const fetchPayments = () => async dispatch => {
  const response = await jsonServer.get('/payments');
  dispatch(
    {
      type: FETCH_PAYMENTS,
      payload: response.data
    }
  );
};

export const fetchPayment = id => {
  return jsonServer.get(`/payments/${id}`).then(response => {
    return response.data;
  });
}


export const editPayment = (id, formValues) => async dispatch => {
  const response = await jsonServer.patch(`/payments/${id}`, formValues);

  dispatch({
    type: EDIT_PAYMENT,
    payload: response.data
  });
  history.push('/');
};


export const deletePayment = (id, paymentsList) => async dispatch => {
  await jsonServer.delete(`/payments/${id}`);

  const filteredList = paymentsList.filter((payment) => payment.id !== id)

  dispatch(
    {
      type: DELETE_PAYMENT,
      payload: filteredList
    }
  );
  history.push('/');
}
