import React, { Component } from 'react';
import styles from '../Searchbar/Searchbar.module.css'
export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleInputChange = e => {
    const { value } = e.target;
    this.setState({ imageName: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      imageName: '',
    });
  };
  
  render() {
    return (
      <>
        <header className={styles.header}>
          <form onSubmit={this.handleSubmitForm}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              onChange={this.handleInputChange}
              type="text"
              autoComplete="off"
              autoFocus
              value={this.state.imageName}
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
