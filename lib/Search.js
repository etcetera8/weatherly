import React, { Component } from 'react'
import './styles/Search.css'
import Cities from './cities.js'
import {Trie} from '@etcetera8/complete-me'

const newTrie = new Trie;
const cityArr = Cities.data;

newTrie.populate(cityArr)

export default class Search extends Component{
  constructor() {
    super()
    this.state = {
      location: ''
    };
    this.handleLocSearch = this.handleLocSearch.bind(this);
    this.setLoc = this.setLoc.bind(this);
  }

  setLoc(e) {
    e.preventDefault();
    this.props.getData(this.state.location);
    localStorage.setItem('city', this.state.location)
  }

  handleLocSearch(e) {
    this.setState({
      location: e.target.value
    })
  }

  render() {
    return(
      <form>
        <input 
          id="search" 
          type="text" 
          placeholder="search location" 
          value={this.state.location}
          onChange={this.handleLocSearch} />
        
        <button id="search-btn" onClick={this.setLoc}>
            submit
        </button>
      </form>
      )
  }

}