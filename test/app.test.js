import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '../lib/App.js'
import Search from '../lib/Search.js'
import 'jest-localstorage-mock';
import mockData from '../lib/mock-data.js'

describe('App and welcome', () => {
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
    expect(localStorage.length).toBe(0);
    expect(wrapper.find('Welcome').length).toEqual(1)
  })

describe('App and Error', () => {

  it('should exist', () => {
    let wrapper = shallow(<App />)
    expect(wrapper).toBeDefined();
    const inst = wrapper.instance();
    localStorage.setItem('city', 'hotdog')
    expect(localStorage.length).toBe(1);
    inst.setState({error: true, response: mockData.response})
    expect(wrapper.state().error).toEqual(true)
    expect(wrapper.find('ErrorPage').length).toEqual(1);
    expect(wrapper.find('Welcome').length).toEqual(0);
  })
})

describe('App and main app', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should mount the divs, the header, the current card and the cards if no errors and local storage has data', () => {
    const inst = wrapper.instance();
    localStorage.setItem('city', 'Defiance, OH');
    expect(localStorage.length).toBe(1);
    inst.setState({
      error: false, 
      response: undefined, 
      apiData: mockData,
      icon: "clear",
      temp_f: 50,
      condition: "sunny",
      hiLow: {low: 20, high:60},
      currDateWeather: "very sunny nice day"
    })
    expect(wrapper.state().error).toEqual(false)
    expect(wrapper.find('ErrorPage').length).toEqual(0);
    expect(wrapper.find('Welcome').length).toEqual(0);
    expect(wrapper.find('div').length).toEqual(2);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Current').length).toEqual(1);
    expect(wrapper.find('Cards').length).toEqual(1);
  })
})

})
