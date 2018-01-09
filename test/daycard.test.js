import React from 'react';
import { mount, shallow } from 'enzyme';
import DayCard from '../lib/DayCard.js'
import mockData from '../lib/mock-data.js'

describe('DayCard', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<DayCard currDay="sunday"
                                 low="30"
                                 high="50"
                                 icon="www.icon.com"
                     />)
    })
    
    it('should exist', () => {
      expect(wrapper).toBeDefined();
    })

    it('should have one section, three p tags, and an img', () => {
      expect(wrapper.find('section').length).toEqual(1)
      expect(wrapper.find('p').length).toEqual(3)
      expect(wrapper.find('img').length).toEqual(1)
    })
  })