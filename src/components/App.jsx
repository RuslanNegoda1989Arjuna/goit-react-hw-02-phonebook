import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Title } from './App.styled';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <div>
        <Title>PhoneBook</Title>
        <PhonebookForm />
      </div>
    );
  }
}
