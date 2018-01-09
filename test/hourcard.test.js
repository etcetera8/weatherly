import React from 'react';
import { mount, shallow } from 'enzyme';
import HourCard from '../lib/HourCard.js'
import mockData from '../lib/mock-data.js'

describe('HourCard', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<HourCard curCondition="50"
                                  time="10:30"
                                  icon="www.icon.com"
                     />)
    })
    
    it('should exist', () => {
      expect(wrapper).toBeDefined();
    })

    it('should have one article, three p tags, and an img', () => {
      expect(wrapper.find('article').length).toEqual(1)
      expect(wrapper.find('p').length).toEqual(1)
      expect(wrapper.find('h1').length).toEqual(1)
      expect(wrapper.find('img').length).toEqual(1)
    })

    it('should render the text from the props to the page', () => {
      expect(wrapper.find('p').text()).toEqual("10:30")
      expect(wrapper.find('h1').text()).toEqual("50°F")
    })
  })