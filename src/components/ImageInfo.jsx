import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import {api} from './ServiceApi/ServiceApi';

class ImageInfo extends Component {
  state = {
    imageName: '',
    page: 1,
    items: [],
    isLoading: false,
    error: null,
    modalOpen: false,
    modalImage: {},
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  async loadImages() {
    this.setState({
      isLoading: true,
    });
    const { imageName, page } = this.state;

    try {
      await api(imageName, page);
      this.setState(({ items }) => {
        return {
          items: [...items, api.hits],
        };
      });
    } catch (error) {
      this.setState({
        error: error,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {/* <ServiceApi/>  */}
      </>
    );
  }
}
export default ImageInfo;
