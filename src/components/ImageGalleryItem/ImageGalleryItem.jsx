import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, id, alt, openModal }) => {
  return (
    <li className={css.ImageGalleryItem} id={id} onClick={() => openModal(id)}>
      <img src={src} alt={alt} className={css.ImageGalleryItemImage} />
    </li>
  );
};
