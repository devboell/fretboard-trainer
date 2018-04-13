import React from 'react'
import testData from 'fixtures/quizEditor'
import QuizEditorPage from '../index'


describe('QuizEditorPage, no selection', () => {
  const data = testData('no_selection', false)
  const wrapper = mount(<QuizEditorPage {...data} />)

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('> List > onSelectItem', () => {
    const button = wrapper.find('List').find('button').at(2)
    button.simulate('click')
    expect(data.selectQuiz).toBeCalledWith('3')
  })

  it('> CreateWrapper > EditorButton', () => {
    const button = wrapper.find('CreateWrapper').find('EditorButton')
    button.simulate('click')
    expect(data.clearQuizSelection).toBeCalledWith(true)
  })
})

describe('QuizEditorPage, selection = 1', () => {
  const data = testData('1', false)
  const wrapper = mount(<QuizEditorPage {...data} />)

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('> QuizForm > button > save(updateQuiz)', () => {
    const inputEvent = {
      target: {
        type: 'text',
        name: 'name',
        value: 'updated',
      },
    }
    const updateQuizArg = {
      id: '1',
      name: 'updated',
      type: 'pc',
      __typename: 'Quiz',
    }

    const quizForm = wrapper.find('QuizForm')
    const input = quizForm.find('input[name="name"]')
    const saveButton = quizForm.find('button').at(0)

    input.simulate('change', inputEvent)
    saveButton.simulate('submit')

    expect(data.updateQuiz).toBeCalledWith(updateQuizArg)
  })

  it('> QuizForm > button > delete', () => {
    const deleteButton = wrapper.find('QuizForm').find('button').at(1)
    deleteButton.simulate('click')
    expect(data.deleteQuiz).toBeCalledWith({ id: '1' })
  })
})

describe('QuizEditorPage, isNew', () => {
  const data = testData('no_selection', true)

  const wrapper = mount(<QuizEditorPage {...data} />)
  jest.clearAllMocks()
  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('> QuizForm > button > save(createQuiz)', () => {
    const inputEvent = {
      target: {
        type: 'text',
        name: 'name',
        value: 'new',
      },
    }
    const createQuizArg = {
      id: undefined,
      name: 'new',
      type: 'pc',
      __typename: 'Quiz',
    }

    const quizForm = wrapper.find('QuizForm')
    const input = quizForm.find('input[name="name"]')
    const saveButton = quizForm.find('button').at(0)

    input.simulate('change', inputEvent)
    saveButton.simulate('submit')

    expect(data.createQuiz).toBeCalledWith(createQuizArg)
  })

  it('> QuizForm > button > delete, should be disabled', () => {
    const deleteButton = wrapper.find('QuizForm').find('button').at(1)
    deleteButton.simulate('click')
    expect(data.deleteQuiz).not.toHaveBeenCalled()
  })
})

