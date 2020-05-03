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
import Input from '@material-ui/core/Input';
import PaymentDatePicker from './utils/PaymentDatePicker';

import { updateDate } from '../actions/insuranceActions';


//import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CurrencyInput from 'react-currency-input-field';


import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);






class PaymentCreate extends React.Component {


  constructor(props) {
    super(props);
    //this.handleCloseModal = this.handleCloseModal.bind(this);
    this.formPayments = React.createRef();

    this.state = {
      datePicker: {
        value: "",
        touched: false,
        error: false
      },
      currencyPicker: {
        value: "",
        touched: true,
        error: false
      }

    }
  }

  handleOnDateChange = (dateValue) => {
    console.log("handleOnChange handleOnChange handleOnChange handleOnChange handleOnChange");
    console.log(dateValue);
    this.setState( {
      datePicker: {
        value: dateValue,
        touched: true,
        error: false
      }
    });
    //this.setState( {datePickerValue:dateValue} );
    //this.props.updateDate(formValues)
  }

  handleOnDateBlur = ({ target: { value } }) => {
    console.log(value);
    console.log("event event event event event");
    console.log("event event event event event");
    if(!value) {
      /*
      this.setState( {
        datePicker: {
          value: value,
          touched: true,
          error: true
        }
      });*/
      this.setState( {
        ...this.state,
        datePicker: {
          touched: true,
          error: true,
          value: ""
        }
      });
    }else {
      /*
      this.setState( {
        datePicker: {
          value: value,
          touched: true,
          error: false
        }
      });
      */
      this.setState({
        ...this.state.datePicker,
        datePicker: {
          value: value,
          touched: true,
          error: false
        }
      })
    }
    /*
    this.setState( {
      datePicker: {
        value: dateValue,
        touched: true,
        error: false
      }
    });*/
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

  renderDatePicker = (props) => {
    console.log("renderDatePicker renderDatePicker renderDatePicker renderDatePicker");
    console.log(this.state.datePicker.value);
    return (

      <div className="customDatePickerWidth">
        <DatePicker
          selected={this.state.datePicker.value}
          onChange={this.handleOnDateChange}

          locale="es"
          dateFormat="dd/MM/yyyy"
          placeholderText="Date"
          //onBlur={this.handleOnDateBlur}
        />
      </div>
    );
  }

  validateValue = (value: number | null): void => {
    /*
    if (value === null) {
      setClassName('');
    } else if (Number.isNaN(value)) {
      setErrorMessage('Please enter a valid number');
      setClassName('is-invalid');
    } else if (value > limit) {
      setErrorMessage(`Max: ${prefix}${limit}`);
      setClassName('is-invalid');
    } else {
      setClassName('is-valid');
    }
    */
  };

  handleSubmitEvent(form)  {
    console.log('onSubmit onSubmit onSubmit onSubmit onSubmit onSubmitonSubmit');
    console.log(form);
    console.log("prueba")
    //debugger;
    //event.preventDefault();
    //this.props.handleSubmit
    //this.props.createPokemon(formValues);  //aqui va el guardado
  }

  renderCurrencyInput = props => {
    return (
      <CurrencyInput
        id="validationCustom01"
        name="input-1"
        defaultValue=""
        className="payment-value"
        onChange={() => {}}
        //selected={this.state.currencyPicker.value}
        prefix="$"
        placeholder="Payment Value"
      />
    );
  }

  renderDescriptionTextArea = props => {
    return (
      <textarea
        {...props.input}
        className="payment-description"
        placeholder="description"
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

              {
                //this.renderDatePicker()
                //<Field name="datePicker" component={this.renderDatePicker} label="Date"/>
              }

              <Field name="datePicker" component={PaymentDatePicker} label="Date"/>

              <Field name="currencyInput" component={this.renderCurrencyInput} label="YourPayment"/>

              <Field name="description" component={this.renderDescriptionTextArea} label="Description"/>
{/*
              <InsuranceCurrencyInput
                name="currencyNumber"
                id="currencyNumber"
                label="Type a currency" />
*/}

              {
                /*
                <button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth" tabindex="0" type="button">
                  <span class="MuiButton-label">Submit</span>
                  <span class="MuiTouchRipple-root"></span>
                </button>
                */
              }
              {
                /*
                */
              }




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


const mapStateToProps = state =>{
  return {
    paymentValues: state.paymentValues
  }
}

//export default connect(mapStateToProps, {updateDate})(PaymentCreate);

const validate = formValues => {
  const errors = {};
  console.log("entra");
  console.log(formValues);



  if (!formValues.datePicker) {
    errors.datePicker = 'You must enter a title';
  }
/*
  if(!formValues.description) {
    errors.description = "You must enter a description";
  }

  */

  return errors;
}

export default reduxForm({
  form: 'insuranceCreate', // a unique identifier for this form
  validate: validate
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

/*
<InsuranceDatePicker
  name="paymentDate"
  id="paymentDate"
  label="Payment Date"
  touched={this.state.datePicker.touched}
  //invalid={invalid}
  //error={error}
  //helperText={touched}
  value={this.state.datePicker.value}
  handleOnChange={this.handleOnChange}
  handleCloseModal={this.handleCloseModal}
/>
*/
