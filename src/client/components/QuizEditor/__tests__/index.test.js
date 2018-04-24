import React from 'react'
import QuizEditor from '../index'


const wrapper = mount(<QuizEditor />)

it('should contain a List component', () => {
  expect(wrapper.find('List').exists()).toBe(true)
})
