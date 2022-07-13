import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import css from './App.module.css';
import { ToastContainer } from 'react-toastify';

const BASE_URL = 'https://pixabay.com/api';
const KEY = 'key=27615297-cbddad2d0ddf2be561a52608f';

export class App extends Component {
  state = {
    imageName: '',
    imageList: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      fetch(
        `${BASE_URL}/?${KEY}&q=${this.state.imageName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
      )
        .then(res => res.json())
        .then(imageList => this.setState({ imageList }));
    }
  }

  handleSubmitForm = data => {
    const { searchValue } = data;
    this.setState({
      imageName: searchValue,
    });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmitForm} />
        <ImageGallery imageList={this.state.imageList.hits} />
        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    );
  }
}
