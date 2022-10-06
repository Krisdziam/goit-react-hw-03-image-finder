const ImageGalleryItem = ({ data, onImageClick}) => {
    const {
      webformatURL,
      largeImageURL,
      type,
      
    } = data;

const onImageModalOpenClick = ()=>{
    onImageClick(largeImageURL)
}

    return (
        <li >
          <img
           
            src={webformatURL}
            alt={type}
            onClick={onImageModalOpenClick}
          />
        
        </li>
      );
    };
    
    export default ImageGalleryItem;