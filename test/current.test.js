import React from 'react';
import { mount, shallow } from 'enzyme';
import Current from '../lib/Current.js'
import mockData from '../lib/mock-data.js'

describe('Current', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Current 
                          icon="clear"
                          temp="50"
                          condition="sunny"
                          low="30"
                          high="60"
                          description="very sunny and stuff"                          
                      />)
    })

    it('should exist', () => {
      expect(wrapper).toBeDefined();
      expect(wrapper.props().className).toEqual('main-weather')
    })

    it('should have one section, three p tags, and an img', () => {
      expect(wrapper.find('main').length).toEqual(1)
      expect(wrapper.find('img').length).toEqual(1)
      expect(wrapper.find('p').length).toEqual(5)
      expect(wrapper.find('div').length).toEqual(3)
    })
  })