import React from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);


export default (props) => {
  const { input,  meta } = props;
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate()-7);
  return (
    <div>
      <div className="customDatePickerWidth">
        <DatePicker
          selected={input.value || null}
          onChange={input.onChange}
          locale="es"
          dateFormat="dd/MM/yyyy"
          placeholderText="Date"
          onBlur={input.onBlur}
          minDate={weekAgo}
        />
      </div>
      {meta.touched && meta.error? <span>{meta.error}</span>:null }
    </div>
  );
};
