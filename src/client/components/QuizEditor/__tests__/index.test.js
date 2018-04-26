import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { Provider } from 'react-redux'

import { pick } from 'ramda'
import QuizEditor from '../index'

import * as fxtrs from '../fixtures'

let wrapper

beforeEach(async () => {
  wrapper = mount((
    <Provider store={fxtrs.store}>
      <MockedProvider
        mocks={[
          ...fxtrs.quizzesMocks,
          ...fxtrs.crudMocks,
        ]}
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
  })

  it('UnselectedMessage is displayed', () => {
    expect(wrapper.find('UnselectedMessage').exists()).toBe(true)
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

  it('sets the buffer in Editor', () => {
    const editorProps = wrapper.find('Editor').props()
    expect(pickData(editorProps.buffer)).toEqual(pickData(selectedQuiz))
  })

  it('form is pristine', () => {
    const formProps = wrapper.find('Form').props()
    expect(formProps.isPristine).toBe(true)
  })
})

const changeName = name =>
  wrapper.find('Form input[name="name"]')
    .simulate('change', { target: { value: name, name: 'name' } })

describe('Change name input', () => {
  const index = 2

  beforeEach(() => {
    clickListButton(index, wrapper)
    changeName('updated', wrapper)
  })

  it('buffer is updated', () => {
    const editorProps = wrapper.find('Editor').props()

    expect(editorProps.buffer.name).toBe('updated')
  })

  it('form is dirty', () => {
    const formProps = wrapper.find('Form').props()
    expect(formProps.isPristine).toBe(false)
  })
})

const saveChanges = wrpr =>
  wrpr.find('Form').simulate('submit')

describe('Update name input', () => {
  const index = 2

  beforeEach(async () => {
    clickListButton(index, wrapper)
    changeName('updated', wrapper)
    saveChanges(wrapper)
    await new Promise(resolve => setTimeout(resolve))
    // wrapper.update()
  })

  it('original is updated', () => {
    const editorProps = wrapper.update().find('Editor').props()
    expect(editorProps.original.name).toBe('updated')
  })

  it('form is pristine', () => {
    // const editorProps = wrapper.find('Editor').props()
    // console.log(editorProps)
    
    const formProps = wrapper.update().find('Form').props()
    expect(formProps.isPristine).toBe(true)
  })
})
