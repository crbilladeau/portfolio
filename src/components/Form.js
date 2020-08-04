import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <>
      <FormTitle>Drop me a message!</FormTitle>
      <form
        onSubmit={submitForm}
        action='https://formspree.io/xknqbgwa'
        method='POST'
        className='form'
      >
        <InputLabel htmlFor='email'>Your Email:</InputLabel>
        <Input type='email' name='email' id='email' />
        <InputLabel htmlFor='message'>Message:</InputLabel>
        <Input type='text' name='message' id='message' />

        {status === 'SUCCESS' ? (
          <Message>Thanks!</Message>
        ) : (
          <Button>Submit</Button>
        )}
        {status === 'ERROR' && <Message>Ooops! There was an error.</Message>}
      </form>
    </>
  );
};

export default ContactForm;

const FormTitle = styled.h3`
  color: #211a23;
  font-family: 'Source Code Pro', monospace;
  font-size: 22px;
  font-weight: 300;
  margin: 1em 0;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin: 0.5em 0 0 0;
  }
  @media screen and (max-width: 425px) {
    font-size: 18px;
    margin: 0.5em 0 0 0;
  }
`;

const InputLabel = styled.label`
  color: #211a23;
  font-family: 'TypeCond', sans-serif;
  font-size: 26px;
  text-transform: uppercase;
  margin: 0 0.5em 0 1.5em;
  @media screen and (max-width: 1440px) {
    margin: 0 0.5em;
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    margin: 0.2em 0em;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Message = styled.p`
  color: #211a23;
  font-family: 'Source Code Prop', monospace;
  font-size: 20px;
  margin: 0.25em 0.25em;
`;

const Input = styled.input`
  background-color: whitesmoke;
  border: 1.5px solid #211a23;
  border-radius: 3px;
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  width: 200px;
  padding: 5px;
  @media screen and (max-width: 1440px) {
    width: 150px;
  }
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ff00ff;
  color: #ff00ff;
  font-family: 'Source Code Pro', monospace;
  font-size: 18px;
  margin: 0 1.5em;
  padding: 0.5em 2em;
  &:hover {
    background-color: magenta;
    color: whitesmoke;
    cursor: pointer;
  }
  @media screen and (max-width: 1440px) {
    padding: 0.5em;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    margin: 0.5em 0;
    padding: 0.5em 2.5em;
  }
`;
