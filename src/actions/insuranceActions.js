import { UPDATE_DATE } from '../constants/types';

export const updateDate = (date) => {
  console.log("updateStore updateStore updateStore updateStore updateStore updateStore");
  console.log(date);
  return {
    type: UPDATE_DATE,
    payload: date
  }
}
