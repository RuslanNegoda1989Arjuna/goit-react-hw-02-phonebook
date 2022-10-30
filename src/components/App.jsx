import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Title } from './App.styled';

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
      </div>
    );
  }
}
