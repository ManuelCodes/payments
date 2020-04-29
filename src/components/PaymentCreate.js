import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import InsuranceDatePicker from './utils/InsuranceDatePicker';
import InsuranceCurrencyInput from './utils/InsuranceCurrencyInput';
import '../styles.css';

import { updateDate } from '../actions/insuranceActions';

class PaymentCreate extends React.Component {


  constructor(props) {
    super(props);
    //this.handleCloseModal = this.handleCloseModal.bind(this);

    this.state = {
      datePicker: {
        value: null,
        touched: false
      }

    }
  }


  renderInsuranceDatePicker = ({
    label,
      input,
      meta: { touched, invalid, error },
      ...custom
  }) => {
    console.log("invalid renderInsuranceDatePicker",invalid);
    console.log("touched renderInsuranceDatePicker",touched);
    console.log("error renderInsuranceDatePicker", error);
    console.log("this.state.datePickerValue");
    console.log(this.state);
    return <InsuranceDatePicker
      name="insuranceDate"
      id="insuranceDate"
      label={label}
      touched={this.state.datePicker.touched}
      //invalid={invalid}
      //error={error}
      //helperText={touched}
      value={this.state.datePicker.value}
      handleOnChange={this.handleOnChange}
      handleCloseModal={this.handleCloseModal}
      />;
  }

  handleOnChange = (dateValue) => {
    console.log("handleOnChange handleOnChange handleOnChange handleOnChange handleOnChange");
    console.log(dateValue);
    //this.setState( {datePickerValue:dateValue} );
    //this.props.updateDate(formValues)
  }

  handleCloseModal = () => {
    console.log('close handleCloseModal handleCloseModal handleCloseModal handleCloseModal handleCloseModal');
    if(!this.state.datePickerValue) {
      //this.setState( { datePicker: {
      //    touched: true
    //    }
    //  } );
      //this.state.datePicker.touched = true;
    }
  }


  renderTextField = ({
      label,
      input,
      meta: { touched, invalid, error },
      ...custom
    }) => {

      return (
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
    );
  }

  onSubmit = (formValues) => {
    console.log('onSubmit onSubmit onSubmit onSubmit onSubmit onSubmitonSubmit');
    console.log(formValues);
    //this.props.createPokemon(formValues);  //aqui va el guardado
  }

  render() {
    console.log("PaymentCreate RENDER")
    console.log(this.state);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="container">
        <Card className="card">
          <CardContent>
            <div>
              <Field
                name="insuranceDate"
                component={this.renderInsuranceDatePicker}
                label="Pick a date"
              />
              <p class="MuiFormHelperText-root Mui-error">Required</p>

              <InsuranceCurrencyInput
                name="currencyNumber"
                id="currencyNumber"
                label="Type a currency" />

              <Field
                name="description"
                component={this.renderTextField}
                label="Description"
              />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth>
                  Submit
                </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    );
  }
}

const validate = values => {
  const errors = {}
  const requiredFields = [
    'insuranceDate',
    'currencyNumber',
    'description'
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}

const mapStateToProps = state =>{
  return {
    paymentValues: state.paymentValues
  }
}

PaymentCreate = connect(mapStateToProps, {updateDate})(PaymentCreate);

export default reduxForm({
  form: 'insuranceCreate', // a unique identifier for this form
  validate
})(PaymentCreate);


/*
<TextField
    id="description"
    name="description"
    label="Description"
    multiline
    rows={4}
    fullWidth
    inputProps={{
      maxLength: 255
    }}
  />
*/
