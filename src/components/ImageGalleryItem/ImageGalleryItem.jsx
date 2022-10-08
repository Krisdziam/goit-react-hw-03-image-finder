import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ data, onImageClick}) => {
    const {
      webformatURL,
      modalImage,
      type,
      
    } = data;


const onImageModalOpenClick = ()=> onImageClick(modalImage);


    return (
        <li className={styles.item}>
          <img
           className={styles.image}
            src={webformatURL}
            alt={type}
            onClick={onImageModalOpenClick}
          />
        
        </li>
      );
    };
    
    export default ImageGalleryItem;