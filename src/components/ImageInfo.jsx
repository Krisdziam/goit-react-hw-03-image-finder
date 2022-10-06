// import React, { Component } from 'react';
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import Searchbar from './Searchbar/Searchbar';
// import { fetchImages } from './ServiceApi/ServiceApi';

// class ImageInfo extends Component {
//   state = {
//     imageName: '',
//     page: 1,
//     items: [],
//     isLoading: false,
//     error: null,
//     modalOpen: false,
//     modalImage: '',
//     status: 'IDLE',
//   };
//   formSubmitHandler = searchName => {
//     this.setState({
//       imageName: searchName,
//     });
//     console.log(searchName);
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.imageName !== this.state.imageName) {
//       this.setState({
//         page: 1,
//         isLoading: true,
//         status: 'PENDING',
//       });
//       fetchImages(prevState.imageName)
//         .then(data =>
//           this.setState({
//             items: data.hits,
//             status: 'RESOLVED',
//           })
//         )
//         .catch(error =>
//           this.setState({ error, status: 'REJECTED' })
//         )
//         .finally(() => this.setState({ isLoading: false }));
//     }
//   }

//   render() {
//     const {
//       imageName,
//       page,
//       items,
//       isLoading,
//       error,
//       modalOpen,
//       modalImage,
//       status,
//     } = this.state;
//     if (this.state.modalImage === '') {
//       return (
//         <Searchbar
//           onSubmit={this.formSubmitHandler}
//         ></Searchbar>
//       );
//     }

//     if (this.state.status === 'RESOLVED') {
//       return (
//         <>
//         <div>{items.map((image)=>{
//           <p>{image.type}</p>
//         })}</div>
//           {/* <ImageGallery>
//             {items.map(image => (
//               <ImageGalleryItem
//                 key={image.id}
//                 data={image}
//               />
//             ))}
//           </ImageGallery> */}
//         </>
//       );
//     }
//   }
// }
// export default ImageInfo;
