import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../lib/App.js'
import Search from '../lib/Search.js'
import 'jest-localstorage-mock';
import mockData from '../lib/mock-data.js'

describe.skip('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have the correct initial state', () => {
    expect(wrapper.state('apiData')).toEqual({})
    expect(wrapper.state('error')).toEqual(false)
  })

  it('should only render the Welcome component when nothing is in localStorage', () => {
    expect(wrapper.find('Welcome').length).toEqual(1)
    expect(localStorage.length).toBe(0);
  })

  it('should render the Error page when Apps state error is true or Apps response state exists', () => {
    localStorage.setItem('city', 'hotdog')
    expect(localStorage.setItem).toHaveBeenLastCalledWith('city', 'hotdog');
    expect(localStorage.length).toBe(1);
    expect(wrapper.find('ErrorPage').length).toEqual(1)
    expect(wrapper.props().includedProp).toEqual(App.getData);
  })

  it('should render the App page when state has api data', () => {
    localStorage.setItem('city', 'Eugene, OR')
    expect(localStorage.setItem).toHaveBeenLastCalledWith('city', 'Eugene, OR');
    expect(localStorage.length).toBe(1);
    console.log("hi", wrapper.debug());
    expect(wrapper.state().apiData).toEqual({})
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').children().length).toEqual(3);
  })

  it('should render Header, Current and Cards if apiData is in this.state', () => {
    localStorage.setItem('city', 'Santa Cruz, CA');

    wrapper.setState( { apiData: mockData } );
    expect(wrapper.find('Welcome').length).toEqual(0);
    expect(wrapper.find('ErrorPage').length).toEqual(0);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Current').length).toEqual(1);
    expect(wrapper.find('Cards').length).toEqual(1);
  });
})