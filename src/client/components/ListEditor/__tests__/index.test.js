import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { Provider } from 'react-redux'
import {
  pickData,
  listButtonIsSelected,
  changeName,
  formIsPristine,
  saveChanges,
  saveButtonIsDisabled,
  clickNew,
  clickDelete,
  clickListButton,
} from 'test-utils/enzyme-queries'
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
    expect(formIsPristine(wrapper)).toBe(true)
  })

  it('Save is disabled', () => {
    expect(saveButtonIsDisabled(wrapper)).toBe(true)
  })
})

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
    expect(formIsPristine(wrapper)).toBe(false)
  })

  it('Save is enabled', () => {
    expect(saveButtonIsDisabled(wrapper)).toBe(false)
  })
})

describe('Update quiz', () => {
  const index = 2

  beforeEach(async () => {
    clickListButton(index, wrapper)
    changeName('updated', wrapper)
    saveChanges(wrapper)
    await new Promise(resolve => setTimeout(resolve))
    // wrapper.update()  why does this only work for 1st test
  })

  it('original is updated', () => {
    const editorProps = wrapper.update().find('Editor').props()
    expect(editorProps.original.name).toBe('updated')
  })

  it('form is pristine', () => {
    expect(formIsPristine(wrapper.update())).toBe(true)
  })
})

describe('Select new quiz', () => {
  beforeEach(async () => {
    clickNew(wrapper)
  })

  it('List selectedQuizid is undefined', () => {
    expect(wrapper.find('List').props().selectedQuizId).toBeUndefined()
  })

  it('New button is disabled', () => {
    expect(wrapper.find('EditorControls button').props().disabled).toBe(true)
  })
})

describe('Create quiz', () => {
  beforeEach(async () => {
    clickNew(wrapper)
    changeName('new', wrapper)
    saveChanges(wrapper)
    await new Promise(resolve => setTimeout(resolve))
  })

  it('List contains and selects new item', () => {
    expect(listButtonIsSelected(6, wrapper.update())).toBe(true)
  })

  it('form is pristine', () => {
    expect(formIsPristine(wrapper.update())).toBe(true)
  })
})

describe('Delete quiz', () => {
  beforeEach(async () => {
    clickListButton(2, wrapper)
    clickDelete(wrapper)
    await new Promise(resolve => setTimeout(resolve))
  })

  it('UnselectedMessage is displayed', () => {
    expect(wrapper.update().find('UnselectedMessage').exists()).toBe(true)
  })

  it('List item was removed', () => {
    expect(wrapper.update().find('List li').length).toBe(fxtrs.quizzes.length - 1)
  })
})

describe('Loading & Error state', () => {
  it('displays loading msg', () => {

  })
})
