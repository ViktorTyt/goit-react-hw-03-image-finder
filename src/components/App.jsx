import { Component } from 'react';
import { Searchbar, ImageGallery, Button, Loader, Modal } from 'components';
import css from './App.module.css';
import { ToastContainer } from 'react-toastify';
import * as API from '../services/api';

export class App extends Component {
  state = {
    imageName: '',
    imageList: [],
    page: 1,
    largeImage: '',
    largeImageAlt: '',
    isLoading: false,
  };

  componentDidUpdate = async (_, prevState) => {
    const { page, imageName, imageList } = this.state;

    if (prevState.page !== page || prevState.imageName !== imageName) {
      this.setState({ isLoading: true });

      try {
        const response = await API.getImages(imageName, page);
        const { hits } = await response;

        this.setState({
          imageList: [...imageList, ...hits],
        });
      } catch (error) {
        console.log(error.message);
      }

      this.setState({ isLoading: false });
    }
  };

  handleSubmitForm = async data => {
    const { searchValue } = data;

    this.setState({
      imageName: searchValue,
      imageList: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleModalOpen = id => {
    const largeImage = this.state.imageList.find(image => image.id === id);

    this.setState({
      largeImage: largeImage.largeImageURL,
      largeImageAlt: largeImage.tags,
    });
  };

  handleModalClose = () => {
    this.setState({
      largeImage: '',
      largeImageAlt: '',
    });
  };

  render() {
    const { isLoading, imageList, largeImage, largeImageAlt } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmitForm} />
        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery
            imageList={imageList}
            openModal={this.handleModalOpen}
          />
        )}
        {imageList.length > 0 && <Button loadMore={this.handleLoadMore} />}
        {largeImage && (
          <Modal
            largeImage={largeImage}
            largeImageAlt={largeImageAlt}
            onClose={this.handleModalClose}
          />
        )}
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    );
  }
}
