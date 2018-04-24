import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'

import QuizEditor from '../index'

import * as fxtrs from './fixtures'

let wrapper

beforeEach(async () => {
  wrapper = mount((
    <MockedProvider
      mocks={[...fxtrs.quizzesMocks]}
    >
      <QuizEditor />
    </MockedProvider>
  ))
  // makes sure the loading is done
  await new Promise(resolve => setTimeout(resolve))
  wrapper.update()
})
it('should contain a List component', () => {
  expect(wrapper.find('List').exists()).toBe(true)
})

it('List contains quiz items', () => {
  expect(wrapper.find('List li').length).toBe(fxtrs.quizzes.length)

  // expect(wrapper.find('List').props().items).toEqual(fxtrs.quizzes)
})
