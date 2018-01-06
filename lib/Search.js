import React, { Component } from 'react'
import './styles/Search.css'
import Cities from './cities.js'
import {Trie} from '@etcetera8/complete-me'

const newTrie = new Trie;
const cityArr = Cities.data.map(city => {
  return city.toLowerCase()
});

newTrie.populate(cityArr)

export default class Search extends Component{
  constructor() {
    super()
    this.state = {
      location: '',
      suggestions: []
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
    let suggestArray = [];
    this.setState({ location: e.target.value })

    if (e.target.value.length > 2) {
      console.log(newTrie.suggest(e.target.value))
    }
    console.log('suggest', suggestArray)
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