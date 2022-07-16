import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components';

export const ImageGallery = ({ imageList, openModal }) => {
  const { ImageGallery } = css;

  return (
    <ul className={ImageGallery}>
      {imageList &&
        imageList.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            src={webformatURL}
            alt={tags}
            openModal={openModal}
          />
        ))}
    </ul>
  );
};
