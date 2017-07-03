/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Welcome from '../components/Welcome';

describe('<Welcome />', () => {

  it('has one "<h1>" tag', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('has one "<p>" tag', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find('p').length).toBe(1)
  })

  it('has a correct h1', () => {
    const wrapper = shallow(<Welcome title="Welcome !"/>);
    expect(wrapper.find('h1').text()).toBe('Welcome !')
  })

  it('has a correct p', () => {
    const wrapper = shallow(<Welcome msg="My message"/>);
    expect(wrapper.find('p').text()).toBe('My message')
  })
})
