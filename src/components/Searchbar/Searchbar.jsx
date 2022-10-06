import React, { Component } from 'react';
import styles from '../Searchbar/Searchbar.module.css'



export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleInputChange = e => {
  
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    if(this.state.imageName.trim() === ''){
      return alert('Please, enter name')
    }
    this.props.onSubmit(this.state.imageName);
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
