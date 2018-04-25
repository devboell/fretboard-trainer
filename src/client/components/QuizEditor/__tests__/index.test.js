import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { Provider } from 'react-redux'
import QuizEditor from '../index'

import * as fxtrs from './fixtures'

let wrapper

beforeEach(async () => {
  wrapper = mount((
    <Provider store={fxtrs.store}>
      <MockedProvider
        mocks={[...fxtrs.quizzesMocks]}
      >
        <QuizEditor />
      </MockedProvider>
    </Provider>
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

const listButton = (index, wrp) =>
  wrp.find('List Button').at(index)

const clickListButton = (index, wrp) =>
  listButton(index, wrp).simulate('click')

const listButtonIsSelected = (index, wrp) =>
  listButton(index, wrp).props().isSelected

it('should select a list item', () => {
  const index = 2
  clickListButton(index, wrapper)

  expect(listButtonIsSelected(index, wrapper)).toBe(true)
})

