import React, { Component } from 'react';

import ImageInfo from './ImageInfo';

import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    imageName: '',
  };
  formSubmitHandler = searchName => {
    this.setState({
      imageName: searchName,
    });
    console.log(searchName);
  };
  render() {
    return (
      <>
        <Searchbar
          onSubmit={this.formSubmitHandler}
        ></Searchbar>

        <ImageInfo imageName={this.state.imageName} />
      </>
    );
  }
}
