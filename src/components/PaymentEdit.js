import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../styles.css';
import PaymentDatePicker from './utils/PaymentDatePicker';
import "react-datepicker/dist/react-datepicker.css";
import { fetchPayment,editPayment } from '../actions';
import { connect } from 'react-redux';


import { registerLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);


class PaymentEdit extends React.Component {

  renderCurrencyInput = props => {
    const { input, meta } = props;
    return (
      <React.Fragment>
        <input
          className="payment-value"
          type="text"
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          onChange={input.onChange}
          maxLength="8"
          placeholder="Payment Value"
          value={input.value}
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

  handleSubmitEvent = (formValues) => {
    console.log("handleSubmitEvent handleSubmitEvent handleSubmitEvent handleSubmitEvent");
    console.log(formValues);
    this.props.editPayment(this.props.match.params.id ,formValues);
  }

  componentDidMount() {

    const response = fetchPayment(this.props.match.params.id);
    response.then(payment => {
      console.log(payment);
      this.props.initialize( {
        datePicker: new Date( payment.datePicker),
        currencyInput: payment.currencyInput,
        description: payment.description
      });
    });
  }

  render() {
    return (
      <form  className="container" onSubmit={this.props.handleSubmit (this.handleSubmitEvent)} >
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
    )
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

PaymentEdit = reduxForm({
  form: 'insuranceEdit', // a unique identifier for this form
  validate: validate
})(PaymentEdit);

export default connect(null,{editPayment})(PaymentEdit);
