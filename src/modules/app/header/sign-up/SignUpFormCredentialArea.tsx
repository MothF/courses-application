import React, {FormEvent, useState} from 'react';
import {Col, Form} from 'react-bootstrap';
import {SignUpFormButton} from 'src/modules/app/header/sign-up/SignUpFormButton';
import 'src/modules/app/header/sign-up/SignUpFormPopup.scss';

export const SignUpFormCredentialArea = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    const form = event.currentTarget as HTMLFormElement;
    if (form && !form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className='sign-up-row row' controlId='formBasicEmail'>
        <Col sm={9}>
          <Form.Control className='sign-up-form-control' type='email' placeholder='Email' required/>
        </Col>
      </Form.Group>
      <Form.Group className='sign-up-row row' controlId='formBasicPassword'>
        <Col sm={9}>
          <Form.Control className='sign-up-form-control' type='password' placeholder='Password' required/>
        </Col>
      </Form.Group>
      <SignUpFormButton type='submit' name={'continue'} className='sign-up-button--continue'/>
    </Form>
  );
};
