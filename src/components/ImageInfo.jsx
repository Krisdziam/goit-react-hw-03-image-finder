import React, { Component } from 'react';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Container from './Loader/Container';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchImages } from './ServiceApi/ServiceApi';

import styles from './ImageInfo.module.css'
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

// import ScrollToTop from "react-scroll-to-top";

class ImageInfo extends Component {
  state = {
    imageName: '',
    page: 1,
    items: [],
    isLoading: false,
    error: null,
    modalOpen: false,
    modalImage: '',
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({
        page: 1,
        isLoading: true,
        status: 'pending',
      });
      fetchImages(this.props.imageName)
        .then(data =>
          this.setState({
            items: data.hits,
            status: 'resolved',
          })
        )
        .catch(error =>
          this.setState({ error, status: 'rejected' })
        )
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  handleLoadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        isLoading: true,
      }),
      () => {
        fetchImages(
          this.props.imageName,
          this.state.page
        ).then(data =>
          this.setState(prevState => {
            return {
              items: [...prevState.items, ...data.hits],
              status: 'resolved',
              isLoading: false,
            };
          })
        );
      }
    );
  };

  openModal = () => {
    this.setState(({ modalOpen }) => ({
      modalOpen: !modalOpen,
    }));
  };

  handleGalleryItem = modalImage => {
    this.setState({
      modalImage: modalImage,

      modalOpen: true,
    });
  };

  scrollOnLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  resetPage = () => {
    this.setState({
      page: 1,
    });
  };

  render() {
    const {
      imageName,
      page,
      items,
      isLoading,
      error,
      modalOpen,
      modalImage,
      status,
    } = this.state;

    if (status === 'idle') {
      return (
        <p className={styles.findText}>
    <MdOutlinePhotoSizeSelectActual  /> Find your best images!
        </p>
      );
    }

    if (status === 'pending') {
      return <p>Loading</p>;
    }

    if (status === 'rejected' || items.length === 0) {
      return (
        <h1>
          Oops... we don't have "{this.props.imageName}" in
          database
        </h1>
      );
    }

    if (this.state.status === 'resolved') {
      return (
        <>
          {modalOpen && (
            <Modal
              modalImage={modalImage}
              onClose={this.openModal}
            />
          )}
          <ImageGallery>
            {items.map(image => (
              <ImageGalleryItem
                key={image.id}
                data={image}
              />
            ))}
          </ImageGallery>

   
            <Button onClick={this.handleLoadMore}>
              {isLoading && <Loader />}
            </Button>
            <ScrollToTop smooth />
        </>
      );
    }
  }
}
export default ImageInfo;
