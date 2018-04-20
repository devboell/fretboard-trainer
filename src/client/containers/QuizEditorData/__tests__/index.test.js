import React from 'react'
import { MockedProvider as ApolloProvider } from 'react-apollo/test-utils'
import ReduxProvider, { getMockStore } from 'redux-mock-provider'
// import { connect } from 'react-redux'
import { contains, find, propEq, eqProps, equals } from 'ramda'
import testData from 'fixtures/quizEditor'
import QuizEditorData from '../index'
import QUIZZES from '../queries'
import { CREATE_QUIZ, UPDATE_QUIZ, DELETE_QUIZ } from '../mutations'

// import { withQuizzesQuery } from '../enhancers'

const store = getMockStore({
  key: 'editor',
  state: {
    selectedQuizId: 'no_selection',
    isNew: false,
    editedQuiz: undefined,
  },
})

const createResult = { id: '7', name: 'new', type: 'pc' }
const updateResult = {
  id: '1',
  name: 'updated',
  type: 'pc',
  __typename: 'Quiz',
}

const deleteResult = '1'

const mutationMocks = [
  {
    request: { query: CREATE_QUIZ },
    result: { data: { createQuiz: createResult } },
  },
  {
    request: { query: UPDATE_QUIZ },
    result: { data: { updateQuiz: updateResult } },
  },
  {
    request: { query: DELETE_QUIZ },
    result: { data: { deleteQuiz: deleteResult } },
  },
]

const updateChildProps = wrapper =>
  wrapper.update().find('QuizEditorPage').props()

describe('QuizEditorData with default state', () => {
  let wrapper
  let childProps
  const data = testData('no_selection', false)

  const queryMocks = [
    {
      request: { query: QUIZZES },
      result: { data: { quizzes: data.quizzes } },
    },
  ]

  beforeEach(async () => {
    wrapper = mount((
      <ReduxProvider store={store}>
        <ApolloProvider
          removeTypename
          mocks={[...queryMocks, ...mutationMocks]}
        >
          <QuizEditorData />
        </ApolloProvider>
      </ReduxProvider>))

    // makes sure the loading is done
    await new Promise(resolve => setTimeout(resolve))

    childProps = updateChildProps(wrapper)
  })

  it('gives the child component initial loaded props', () => {
    expect(childProps).toMatchSnapshot()
  })

  it('calls createQuiz and updates the cache correctly', async () => {
    await childProps.createQuiz()
    childProps = updateChildProps(wrapper)
    const result = contains(createResult, childProps.quizzes)

    expect(result).toBeTruthy()
  })

  it('calls updateQuiz and updates the cache correctly', async () => {
    await childProps.updateQuiz()
    childProps = updateChildProps(wrapper)
    const updatedQuiz = find(propEq('id', updateResult.id))(childProps.quizzes)
    const result = eqProps('name', updateResult, updatedQuiz)

    expect(result).toBeTruthy()
  })

  it('calls deleteQuiz and updates the cache correctly', async () => {
    await childProps.deleteQuiz()
    childProps = updateChildProps(wrapper)
    const result = find(propEq('id', deleteResult))(childProps.quizzes)
    expect(result).toBeUndefined()
  })

  it.skip('calls selectQuiz and updates the cache correctly', async () => {
    const selectedId = '3'
    await childProps.selectQuiz(selectedId)
    childProps = updateChildProps(wrapper)
    const result = equals(childProps.selectedQuizId, selectedId)

    expect(result).toBeTruthy()
  })

  it.skip('calls clearQuizSelection(true) and updates the cache correctly', async () => {
    const flag = true
    await childProps.clearQuizSelection(flag)
    childProps = updateChildProps(wrapper)
    const result = equals(childProps.isNew, flag)

    expect(result).toBeTruthy()
  })
})

describe('QuizEditorData loading and error state', () => {
  it('shows loading element', () => {
    const wrapper = mount((
      <ReduxProvider store={store}>
        <ApolloProvider
          removeTypename
        >
          <QuizEditorData />
        </ApolloProvider>
      </ReduxProvider>))
    expect(wrapper.find('QuizEditorData')).toMatchSnapshot()
  })

  it('shows error element', async () => {
    const wrapper = mount((
      <ReduxProvider store={store}>
        <ApolloProvider
          removeTypename
          mocks={{
            request: { query: QUIZZES },
            result: { data: { error: 'err msg' } },
          }}
        >
          <QuizEditorData />
        </ApolloProvider>
      </ReduxProvider>))

    await new Promise(resolve => setTimeout(resolve))
    expect(wrapper.update().find('QuizEditorData')).toMatchSnapshot()
  })
})

