import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: '',
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}
