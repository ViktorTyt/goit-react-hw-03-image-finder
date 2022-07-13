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
    return (
      <header className={css.SearchBar}>
        <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
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
