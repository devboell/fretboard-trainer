import React from 'react'
import Content from '../index'

it('List component snapshot', () => {
  const wrapper = shallow(
    <Content />,
  )
  expect(wrapper).toMatchSnapshot()
})
