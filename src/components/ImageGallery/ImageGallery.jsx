import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components';

export const ImageGallery = ({ imageList, openModal }) => {
  const { ImageGallery } = css;

  return (
    <ul className={ImageGallery}>
      {imageList &&
        imageList.map(image => (
          <ImageGalleryItem
            key={image.id}
            id={image.id}
            src={image.webformatURL}
            alt={image.tags}
            openModal={openModal}
          />
        ))}
    </ul>
  );
};
