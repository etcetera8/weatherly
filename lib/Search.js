import React, { Component } from 'react';
import './styles/Search.css';
import Cities from './cities.js';
import {Trie} from '@etcetera8/complete-me';
import PropTypes from 'prop-types';

const newTrie = new Trie;
const cityArr = Cities.data.map(city => city.toLowerCase());

newTrie.populate(cityArr);

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    };
    this.handleLocSearch = this.handleLocSearch.bind(this);
    this.setLoc = this.setLoc.bind(this);
  }

  setLoc(e) {
    e.preventDefault();
    this.props.getData(this.state.location);
    localStorage.setItem('city', this.state.location);
  }

  handleLocSearch(e) {
    this.setState({ location: e.target.value });
    if (e.target.value.length > 2) {
      this.state.suggestions = newTrie.suggest(e.target.value.toLowerCase());
    }
  }

  render() {
    return (
      <div className = 'form'>
        <form>
          <input
            list="suggestions" 
            id="search" 
            type="text" 
            placeholder="search location" 
            value={this.state.location}
            onChange={this.handleLocSearch} />
          <button id="search-btn" onClick={this.setLoc}>submit</button>
        </form>
        {
          this.state.suggestions &&
          <datalist id="suggestions">
            {
              this.state.suggestions.map(val => <option value= {val} />)
            }
          </datalist> 
        }
      </div>
    );
  }
}

Search.propTypes = {
  getData: PropTypes.func
};