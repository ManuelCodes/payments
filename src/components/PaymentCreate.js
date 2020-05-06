import React from 'react';

import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { createPayment}  from '../actions';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../styles.css';
import PaymentDatePicker from './utils/PaymentDatePicker';
import "react-datepicker/dist/react-datepicker.css";


import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);






class PaymentCreate extends React.Component {

  handleSubmitEvent = (form) =>  {
    console.log('onSubmit onSubmit onSubmit onSubmit onSubmit onSubmitonSubmit');
    console.log(form);
    console.log("prueba")
    this.props.createPayment(form);
    //console.log(this);
    //debugger;
    //event.preventDefault();
    //this.props.createPokemon(formValues);  //aqui va el guardado
  }

  renderCurrencyInput = props => {
    const { input, meta } = props;
    return (
      <React.Fragment>
        <input
          className="payment-value"
          type="text"
          onBlur={input.onBlur}
          onFocus={input.focus}
          maxLength="8"
          placeholder="Payment Value"
        />
        <div>
          {meta.touched && meta.error? <span>{meta.error}</span>:null }
        </div>
      </React.Fragment>
    )
  }

  renderDescriptionTextArea = props => {
    return (
      <textarea
        {...props.input}
        className="payment-description"
        placeholder="Description"
        id="description"
        name="description" />
    );
  }

  render() {

    return (
      <form  className="container" onSubmit={this.props.handleSubmit (this.handleSubmitEvent)} ref={this.formPayments}>
        <Card className="card">
          <CardContent>
            <div>

              <Field
                name="datePicker"
                component={PaymentDatePicker}
                label="Date"

              />

              <Field
                name="currencyInput"
                component={this.renderCurrencyInput}
                label="YourPayment"
              />

              <Field name="description" component={this.renderDescriptionTextArea} label="Description"/>

              <button style={{width: "100%"}} className="button buttonBlue" >
                submit
                <div className="ripples buttonRipples">
                  <span className="ripplesCircle"></span>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </form>
    );
  }

}


const validate = formValues => {
  const errors = {};

  if (!formValues.datePicker) {
    errors.datePicker = 'You must enter a date';
  }
  if (!formValues.currencyInput) {
    errors.currencyInput = 'You must enter a payment value';
  }else if( !/^\d+\.\d{0,3}$/.test(formValues.currencyInput)) {
    errors.currencyInput = 'You must enter a valid payment value';
  }
  return errors;
}

PaymentCreate = reduxForm({
  form: 'insuranceCreate', // a unique identifier for this form
  validate: validate
})(PaymentCreate);

export default connect(null,{createPayment})(PaymentCreate);
