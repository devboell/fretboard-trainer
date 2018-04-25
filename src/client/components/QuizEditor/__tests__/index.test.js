import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { Provider } from 'react-redux'

import { pick } from 'ramda'
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

describe('Default, no action', () => {
  it('contains a List component', () => {
    expect(wrapper.find('List').exists()).toBe(true)
  })

  it('List contains quiz items', () => {
    expect(wrapper.find('List li').length).toBe(fxtrs.quizzes.length)
    // expect(wrapper.find('List').props().items).toEqual(fxtrs.quizzes)
  })
})

const pickData = pick(['id', 'name', 'type'])

const listButton = (index, wrp) =>
  wrp.find('List Button').at(index)

const clickListButton = (index, wrp) =>
  listButton(index, wrp).simulate('click')

const listButtonIsSelected = (index, wrp) =>
  listButton(index, wrp).props().isSelected

describe('Select list item', () => {
  const index = 2
  const selectedQuiz = fxtrs.quizzes[index]

  beforeEach(() => clickListButton(index, wrapper))

  it('selects an item in List', () => {
    expect(listButtonIsSelected(index, wrapper)).toBe(true)
  })

  it('shows selection in Editor', () => {
    const editorProps = wrapper.find('Editor').props()
    expect(pickData(editorProps.source)).toEqual(pickData(selectedQuiz))
  })
})
