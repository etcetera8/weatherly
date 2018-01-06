import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';
import mockData from '../lib/mock-data.js';
import localStorageMock from '../__mocks__/localStorage';

window.localStorage = localStorageMock;  

describe('App', () => {

  let wrapper;
  beforeEach( () => {
    wrapper = shallow(<App />)
  })

  it('should exist', () => {
    console.log(<App />)
    expect(wrapper).toBeDefined();
  })

  it('should render the elements on the page', () => {
    localStorage.setItem('city', '80218');
    expect(wrapper.find('Header').length).toEqual(1)
  })

  it


})