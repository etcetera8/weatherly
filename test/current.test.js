import React from 'react';
import { mount, shallow } from 'enzyme';
import Current from '../lib/Current.js'
import mockData from '../lib/mock-data.js'

describe.skip('Current', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Current 
                          icon={mockData}
                          temp={mockData}
                          condition={mockData}
                          low={mockData}
                          high={mockData}
                          description={mockData}                          
                      />)
    })

    it('should exist', () => {
      expect(wrapper).toBeDefined();
      console.log(wrapper.debug())
    })
  })