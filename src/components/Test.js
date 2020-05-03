import React, { FC, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

export const Test: FC = () => {
  const limit = 1000;
  const prefix = '£';

  const [errorMessage, setErrorMessage] = useState('');
  const [className, setClassName] = useState('');

  const validateValue = (value: number | null): void => {
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
  };

  return (
    <form className="needs-validation">
      <div className="form-row">
        <div className="col-sm-12">
          <label htmlFor="validationCustom01">Please enter a value (max £1,000)</label>
          <CurrencyInput
            id="validationCustom01"
            name="input-1"
            defaultValue={999.99}
            className={`form-control ${className}`}
            onChange={validateValue}
            prefix={prefix}
          />
          <div className="invalid-feedback">{errorMessage}</div>
        </div>
      </div>
    </form>
  );
};

export default Test;
