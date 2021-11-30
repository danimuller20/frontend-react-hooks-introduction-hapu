import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button';
import style from './formInput.module.css';
export const FormInput = React.memo(function FormInput({
  inputValues,
  isBtnDisabled,
}) {
  return (
    <form className={style.inputContainer} action="#">
      <input
        name="name"
        onChange={inputValues}
        className={style.input}
        type="text"
        placeholder="Your name"
      />
      <input
        name="email"
        onChange={inputValues}
        className={style.input}
        type="text"
        placeholder="Your email"
      />
      <Button type="submit" buttonClass="formButton" disabled={isBtnDisabled}>
        Send
      </Button>
    </form>
  );
});

FormInput.propTypes = {
  inputValues: PropTypes.func,
  isBtnDisabled: PropTypes.bool,
};
