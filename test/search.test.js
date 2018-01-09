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
    })

    it('should have one div, one form, one input, and a button', () => {
      expect(wrapper.find('div').length).toEqual(1)
      expect(wrapper.find('form').length).toEqual(1)
      expect(wrapper.find('input').length).toEqual(1)
      expect(wrapper.find('button').length).toEqual(1)
    })

    it('should have a default location state to an empty string', () => {
      expect(wrapper.state().location).toEqual('');
    })

    it('should have state change on update', () => {
      expect(wrapper.state().location).toEqual('');
      wrapper.setState({location: 'poughkeepsie'})
      expect(wrapper.state().location).toEqual('poughkeepsie');
    })

    it('should update state on change', () => {
      expect(wrapper.state().location).toEqual('');
      wrapper.find('input').simulate('change', {target: {value: 'for'}});
      expect(wrapper.state().location).toEqual('for')
    })    

    it('should provide a list of suggestions on input', () => {
      expect(wrapper.state().location).toEqual('');
      wrapper.find('input').simulate('change', {target: {value: 'for'}});
      expect(wrapper.find('datalist').length).toEqual(1)
      expect(wrapper.find('option').length).toEqual(7)
    })

    it.skip('should make the api call on click', () => {
      wrapper.find('input').simulate('change', {target: {value: 'for'}});
      expect(wrapper.state().location).toEqual('for')
      wrapper.find('button').simulate('click', { preventDefault() {} });
    })

  })