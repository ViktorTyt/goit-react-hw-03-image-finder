import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ src, id, alt, openModal }) => {
  const { ImageGalleryItem, ImageGalleryItemImage } = css;

  return (
    <li className={ImageGalleryItem} id={id} onClick={() => openModal(id)}>
      <img src={src} alt={alt} className={ImageGalleryItemImage} />
    </li>
  );
};
