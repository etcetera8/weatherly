import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js'
import mockData from '../lib/mock-data.js'

describe('Search', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Search list="suggestions" 
                                id="search" 
                                type="text" 
                                placeholder="search location" 
                                value={'denver'}
                     />)
    })

    it('should exist', () => {
      expect(wrapper).toBeDefined();
      console.log("Search", wrapper.debug())
    })

  })