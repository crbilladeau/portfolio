import React, { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  // constructor(props) {
  //   super(props);
  //   this.submitForm = this.submitForm.bind(this);
  //   this.state = {
  //     status: '',
  //   };
  // }

  // render() {
  //   const { status } = this.state;
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
    <form
      onSubmit={submitForm}
      action='https://formspree.io/xknqbgwa'
      method='POST'
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <InputLabel>Your Email:</InputLabel>
      <Input type='email' name='email' />
      <InputLabel>Message:</InputLabel>
      <Input type='text' name='message' />
      {status === 'SUCCESS' ? <p>Thanks!</p> : <Button>Submit</Button>}
      {status === 'ERROR' && <p>Ooops! There was an error.</p>}
    </form>
  );
};

export default ContactForm;

const InputLabel = styled.label`
  color: #211a23;
  font-family: 'Source Code Pro', monospace;
  font-size: 22px;
  margin: 0px 10px 0px 20px;
`;

const Input = styled.input`
  background-color: whitesmoke;
  border: 1.5px solid #211a23;
  border-radius: 3px;
  font-family: 'Source Code Pro', monospace;
  font-size: 16px;
  width: 200px;
  padding: 5px;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ff00ff;
  color: #ff00ff;
  font-family: 'Source Code Pro', monospace;
  font-size: 18px;
  margin: 5px 8px 5px 8px;
  padding: 8px;
  &:hover {
    background-color: magenta;
    color: whitesmoke;
    cursor: pointer;
  }
`;
