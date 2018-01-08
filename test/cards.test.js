import React from 'react';
import { mount, shallow } from 'enzyme';
import Cards from '../lib/Cards.js'
import mockData from '../lib/mock-data.js'

describe.skip('Cards', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Cards uData={mockData} />)
    })
    
    it('should exist', () => {
      expect(wrapper).toBeDefined();
    })

    it('should have two divs, and two sections', () => {
      expect(wrapper.find('div').length).toEqual(2)
      expect(wrapper.find('section').length).toEqual(2)
    })

    it('should have 7 hour cards and 10 day cards' , () => {
      expect(wrapper.find('HourCard').length).toEqual(7)
      expect(wrapper.find('DayCard').length).toEqual(10)
    })
  })