import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '../lib/Header.js'
import mockData from '../lib/mock-data.js'
import App from '../lib/App.js'

describe.skip('Header', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Header location="Denver"
                         />)
    })

    it('should exist', () => {
      expect(shallow(<Header location="denver" />)).toBeDefined();
    })
  })

 