import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { reducer as formReducer } from "redux-form";
import { createStore, combineReducers } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { reduxForm, Field, formValueSelector } from "redux-form";


const DateField = props => {
  const {
    meta: { submitting, error, touched },
    input: { onBlur, value, ...inputProps },
    ...others
  } = props;

  const onChange = date => {
    Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);
  };
  //        value={typeof selectedDate == 'undefined'?null:selectedDate}
  console.log("DateField DateField DateField DateField DateField");
  console.log(value);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        {...inputProps}
        {...others}
        format="dd/MM/yyyy"
        value={value ? new Date(value) : null}
        disabled={submitting}
        onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
        error={error && touched}
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  );
};

const ReduxFormExample = props => {
  const formValues = {
    isFormValid: props.valid,
    values: {
      date: props.date,
    },
  };

  const submit = values => {
    alert(JSON.stringify(values));
  };

  console.log("ReduxFormExample ReduxFormExample ReduxFormExample ReduxFormExample ReduxFormExample");
  console.log(props.formValues);

  return (
    // only calls the submit if form is valid
    <form onSubmit={props.handleSubmit(submit)}>
      <Grid container>
        <Grid item container justify="center" xs={12}>
          <Field name="date" component={DateField} />
        </Grid>
        <Grid item xs={12} sm={12} style={{ margin: "24px" }}>
          565
        </Grid>
      </Grid>
    </form>
  );
};

const selector = formValueSelector("example");

const mapStateToProps = state => ({
  date: selector(state, "date")
});

const createReduxForm = reduxForm({ form: "example" });
export default connect(mapStateToProps)(createReduxForm(ReduxFormExample));
