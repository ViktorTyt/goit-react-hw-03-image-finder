import { Component } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChangeSearch = searchValue => {
    this.setState({
      searchValue,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.searchValue.trim() === '') {
      toast.error('Please, enter image name');
      return;
    }
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    return this.setState({
      searchValue: '',
    });
  };

  render() {
    const {
      SearchBar,
      SearchForm,
      SearchFormButton,
      SearchFormButtonLabel,
      SearchFormInput,
    } = css;

    return (
      <header className={SearchBar}>
        <form className={SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={SearchFormButton}>
            <span className={SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={SearchFormInput}
            type="text"
            name="search"
            value={this.state.searchValue}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={({ target: { value } }) =>
              this.handleChangeSearch(value.toLowerCase())
            }
          />
        </form>
      </header>
    );
  }
}
