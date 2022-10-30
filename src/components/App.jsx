import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { MainTitle } from './App.styled';

export class App extends Component {
  state = { contacts: [], name: '' };

  render() {
    return (
      <div>
        <MainTitle>PhoneBook</MainTitle>
      </div>
    );
  }
}
