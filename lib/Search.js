import React, { Component } from 'react'
import './styles/Search.css'

export default class Search extends Component{
  constructor() {
    super()
    this.state = {
      location: null
    };
    this.handleLocSearch = this.handleLocSearch.bind(this);
    this.setLoc = this.setLoc.bind(this);
  }


  setLoc(e) {
    e.preventDefault();
    console.log(this.props.data)
    this.props.getData(this.state.location);
    localStorage.setItem('city', this.state.location)
  }

  handleLocSearch(e) {
    // console.log(e.target)
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
          onChange={this.handleLocSearch}
          />
        <button id="search-btn" onClick={this.setLoc}>
            submit
        </button>
      </form>
      )
  }

}