/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/Header';

describe('<Header />', () => {
    it('has a correct title', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('title').text()).toBe('Estimeo Highlights')
    })

    it('has a correct link 1', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.contains('<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />'))
    })

    it('has a correct link 2', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.contains('<link rel="stylesheet" href="/static/css/estimeo-style.css"/>'))
    })

    it('has one "<style>" tag', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('style').length).toBe(1)
    })

})
