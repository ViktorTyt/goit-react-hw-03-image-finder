import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imageList }) => {
  return (
    <ul className={css.ImageGallery}>
      {imageList &&
        imageList.map(image => (
          <ImageGalleryItem key={image.id} src={image.webformatURL} />
        ))}
    </ul>
  );
};
