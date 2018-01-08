import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '../lib/Header.js'
import App from '../lib/App.js'
import Search from '../lib/Search.js'
import mockData from '../lib/mock-data.js'

describe('Header', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Header location={mockData.current_observation}
                              getData={App.getData}
                      />)
    })

    it('should exist', () => {
      expect(wrapper).toBeDefined();
    })

    it('should start with props', () => {
      expect(wrapper.props().location).toEqual(mockData.current_observation)
    })

    it('should mount one div, two h3s and search component', () => {
      expect(wrapper.find('div').length).toEqual(1);
    }) 

})