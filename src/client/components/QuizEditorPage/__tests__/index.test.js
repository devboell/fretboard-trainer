import React from 'react'
import testData,
{
  newEditedQuiz,
  updatedEditedQuiz,
} from 'fixtures/quizEditor'

import QuizEditorPage from '../index'


describe('QuizEditorPage, no selection', () => {
  const data = testData('no_selection', false)
  const wrapper = mount(<QuizEditorPage {...data} />)

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('> List > onSelectItem', () => {
    const expected = {
      __typename: 'Quiz', id: '3', name: 'quiz three', type: 'pc',
    }
    const button = wrapper.find('List').find('button').at(2)
    button.simulate('click')
    expect(data.onSelectQuiz).toBeCalledWith(expected)
  })

  it('> CreateWrapper > EditorButton', () => {
    const button = wrapper.find('CreateWrapper').find('EditorButton')
    button.simulate('click')
    expect(data.onSelectNewQuiz).toBeCalled()
  })
})

describe('QuizEditorPage, selection = 1', () => {
  const data = testData('1', false)
  const wrapper = mount(<QuizEditorPage {...data} />)
  jest.clearAllMocks()

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('> QuizForm > button > save(updateQuiz)', () => {
    const updateQuizArg = {
      id: '1',
      name: 'updated',
      type: 'pc',
      __typename: 'Quiz',
    }

    const quizForm = wrapper
      .setProps({ editedQuiz: updatedEditedQuiz })
      .find('QuizForm')
    const saveButton = quizForm.find('button').at(0)

    saveButton.simulate('submit')

    expect(data.updateQuiz).toBeCalledWith(updateQuizArg)
  })

  it('> QuizForm > button > delete', () => {
    const deleteButton = wrapper.find('QuizForm').find('button').at(1)
    deleteButton.simulate('click')
    expect(data.deleteQuiz).toBeCalledWith({ id: '1' })
  })

  it('> QuizForm > button > handleInputChange', () => {
    const inputEvent = {
      target: {
        type: 'text',
        name: 'name',
        value: 'updated',
      },
    }

    const quizForm = wrapper.find('QuizForm')
    const nameInput = quizForm.find('input[name="name"]').at(0)

    nameInput.simulate('change', inputEvent)

    expect(data.onUpdateEditedQuiz).toBeCalledWith('name', 'updated')
  })
})

describe('QuizEditorPage, isNew', () => {
  const data = testData('no_selection', true)

  const wrapper = mount(<QuizEditorPage {...data} />)
  jest.clearAllMocks()
  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('> QuizForm > button > save(createQuiz)', async () => {
    const createQuizArg = {
      id: undefined,
      name: 'new',
      type: 'pc',
      __typename: 'Quiz',
    }

    const quizForm = wrapper
      .setProps({ editedQuiz: newEditedQuiz })
      .find('QuizForm')
    const saveButton = quizForm.find('button').at(0)

    await saveButton.simulate('submit')

    expect(data.createQuiz).toBeCalledWith(createQuizArg)
  })

  it('> QuizForm > button > delete, should be disabled', () => {
    const deleteButton = wrapper.find('QuizForm').find('button').at(1)
    deleteButton.simulate('click')
    expect(data.deleteQuiz).not.toHaveBeenCalled()
  })
})

