import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={src} alt="" className={css.ImageGalleryItemImage} />
    </li>
  );
};
