import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { FormInput } from '../form-input';
import style from './fifthSection.module.css';

export const FifthSection = () => {
  const [value, setValue] = useState({ name: '', email: '' });
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    const { name, email } = value;
    const nameValidate = /^[A-Za-z0-9]*$/.test(name);
    const emailValidate = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    if (name.length > 0 && nameValidate && emailValidate) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [value]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const inputValues = useCallback((event) => {
    handleInputChange(event);
  }, []);

  const text = useMemo(() => {
    return (
      <>
        <h1 className={style.title}>
          Are you a parent without a nanny and looking to share?
        </h1>
        <p className={style.paragraph}>
          Leave us your name and email and we’ll update you as soon as a share
          becomes available in your area!
        </p>
      </>
    );
  }, []);

  return (
    <section className={style.sectionContainer}>
      {text}
      );
      <FormInput inputValues={inputValues} isBtnDisabled={isBtnDisabled} />
      {isBtnDisabled && (
        <p className={style.waring}>Please enter valid data.</p>
      )}
    </section>
  );
};
