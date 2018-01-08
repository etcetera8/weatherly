import React from 'react';
import { mount, shallow } from 'enzyme';
import HourCard from '../lib/HourCard.js'
import mockData from '../lib/mock-data.js'

describe.skip('HourCard', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<HourCard currCondition="clear"
                                  time="10:30"
                                  icon="www.icon.com"
                     />)
    })
    
    it('should exist', () => {
      expect(wrapper).toBeDefined();
      console.log("HourCard", wrapper.debug())
    })

    it('should have one article, three p tags, and an img', () => {
      expect(wrapper.find('article').length).toEqual(1)
      expect(wrapper.find('p').length).toEqual(1)
      expect(wrapper.find('h1').length).toEqual(1)
      expect(wrapper.find('img').length).toEqual(1)
    })
  })