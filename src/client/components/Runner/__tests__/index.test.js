import React from 'react'
import { Provider } from 'react-redux'
// import * as getQuestion from 'lib/question'

import { quizzes } from 'fixtures/graphql/quiz'
import { clickStart } from 'test-utils/enzyme-queries/runner'
import Runner from '../index'
import { store } from '../mocks'
import { initRunner } from '../reducer'


store.dispatch(initRunner(quizzes[0]))

jest.mock('lib/question', () => {
  const q = {
    choices: [
      'G#',
      'E',
      'D',
      'G',
    ],
    entity: {
      name: 'D',
      otherLocs: [],
      rootLoc: {
        pos: 5,
        str: 1,
      },
    },
  }
  return jest.fn(() => q)
})

it('should behave...', () => {
  const wrapper = mount((
    <Provider store={store}>
      <Runner />
    </Provider>))

  // jest.spyOn(question, 'getQuestion')
  // question.getQuestion.mockImplementation(() => q)
  clickStart(wrapper)
  expect(wrapper).toMatchSnapshot()
})
