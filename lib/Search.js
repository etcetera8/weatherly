import React, { Component } from 'react'
import './styles/Search.css'

export default class Search extends Component{
  constructor() {
    super()
    this.state = {}
  }

  getLoc(e) {
    e.preventDefault();
    let input = document.getElementById("search").value;
    document.getElementById("search").value = "";
  }

  render() {
    return(
      <form>
        <input id="search" type="text" placeholder="search location" />
          <button id="search-btn" onClick={this.getLoc}>
            submit
          </button>
      </form>
      )
  }

}