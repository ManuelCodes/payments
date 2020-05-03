import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField'




export default function InsuranceDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(props.value);
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate()-7);

  const renderTextField = (props) => {
    //
    console.log("meta meta meta meta meta");
    console.log("caca caca caca caca caca");
    console.log(props)
    console.log(props.error);
    //forceUpdate(props.value);



    const {
      label,
      input,
      ...custom
    } = props;
      return (
      <TextField
        fullWidth
        label={label}
        placeholder={label}
        error={true}
        //onChange={() => console.log("TextField CHANGE")}
        {...input}
        {...custom}
      />
    );
  }

  const onChangePicker = (value) => {
    console.log("cokun cokun cokun cokun cokun");
    //forceUpdate(value);
    handleDateChange(value);
    //
    props.handleOnChange(value);
  }

  //const forceUpdate = React.useCallback((value) => onChangePicker(value), []);


  console.log("invalid datepicker ",props.invalid);
  console.log("touched datepicker ",props.touched);
  console.log("error datepicker ",props.error);
  //console.log("defatulValue datePicker ", props.defatulValue);
  console.log("selectedDate ",selectedDate);
  //console.log("handleOnChange ", props.handleOnChange);
  //console.log("hook handleDateChange hook handleDateChange hook handleDateChange hook handleDateChange hook handleDateChange ");
  //console.log(handleDateChange);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker //a; parecer no tiene touched and invalid
        //value={typeof selectedDate == 'undefined'?null:selectedDate}
        //value={props.value}
        value={selectedDate}

        onChange={onChangePicker}
        //onChange={props.handleOnChange}

        minDate={weekAgo}
        format="dd/MM/yyyy"
        fullWidth
        name={props.name}
        id={props.id}
        label={props.label}
        //onClose={ forceUpdate }
        onClose={  props.handleCloseModal}
        onAccept={() => console.log('onAccept')}
        //onClose={(x) =>  props.handleCloseModal(x)}
        error={props.touched}
        //helperText={props.touched && props.error}
        //helperText={props.touched?'required':''}
        //helperText="yolo"
        TextFieldComponent={renderTextField}
        variant="inline"
        />
    </MuiPickersUtilsProvider>
  );
}

/*
<DatePicker
  value={typeof selectedDate == 'undefined'?null:selectedDate}
  onChange={handleDateChange}
  minDate={weekAgo}
  format="dd/MM/yyyy"
  fullWidth
  name={props.name}
  id={props.id}
  label={props.label}

  error={props.touched && props.invalid}
  helperText={props.touched && props.error}
  />
*/


/*

<TextField
  multiline
  rows={4}
  fullWidth
  inputProps={{
    maxLength: 255
  }}
  label={label}
  placeholder={label}
  error={touched && invalid}
  helperText={touched && error}
  {...input}
  {...custom}
/>


*/
