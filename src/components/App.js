import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import  ImageInfo  from './ImageInfo';
import Container from './Loader/Container';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from './ServiceApi/ServiceApi';

export class App extends Component {
  state = {
    imageName: "",
  };
  formSubmitHandler = searchName => {
    this.setState({
      imageName: searchName,
    });
    console.log(searchName);
  };
  render(){
    return(
      <>
      <Searchbar
      onSubmit={this.formSubmitHandler}
    ></Searchbar>
  
      <ImageInfo imageName={this.state.imageName}/></>
    )
  }
}