import React from 'react'
import pt from 'prop-types'
import { isEmpty } from 'ramda'
import { ApolloConsumer } from 'react-apollo'

import List from 'components/List'
import QuizEditor from 'components/QuizEditor'

import withData from './enhancers'
import Wrapper from './Wrapper'


const newQuiz = {
  id: undefined,
  name: '',
  __typename: 'Quiz',
}

const QuizEditorData = ({
  quizzes,
  loading,
  error,
  selectedQuizId,
  isNew,
  createQuiz,
  updateQuiz,
  deleteQuiz,
}) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const selectedQuiz = selectedQuizId === 'no_selection' || isEmpty(quizzes)
    ? undefined
    : quizzes.filter(q => q.id === selectedQuizId)[0]
  const quiz = isNew ? newQuiz : selectedQuiz


  return (
    <ApolloConsumer>
      {(cache) => {
        const selectQuiz = id => cache.writeData({ data: { isNew: false, selectedQuizId: id } })
        const clearQuizSelection = isNewFlag => cache.writeData({ data: { isNew: isNewFlag, selectedQuizId: 'no_selection' } })

        return (
          <Wrapper>
            <List
              items={quizzes}
              selectedItemId={selectedQuizId}
              onSelectItem={selectQuiz}
            />
            <QuizEditor
              {...{
                quiz,
                isNew,
                clearQuizSelection,
              }}
              onCreateQuiz={createQuiz}
              onUpdateQuiz={updateQuiz}
              onDeleteQuiz={deleteQuiz}
            />
          </Wrapper>
      )
    }}
    </ApolloConsumer>
  )
}

QuizEditorData.propTypes = {
  quizzes: pt.arrayOf(pt.shape({})),
  loading: pt.bool.isRequired,
  error: pt.shape({}),
  selectedQuizId: pt.string.isRequired,
  isNew: pt.bool.isRequired,
  createQuiz: pt.func.isRequired,
  updateQuiz: pt.func.isRequired,
  deleteQuiz: pt.func.isRequired,
}

QuizEditorData.defaultProps = {
  quizzes: undefined,
  error: undefined,
}

export default withData(QuizEditorData)

/*
import { Query, Mutation } from 'react-apollo'

  <Query query={QUIZZES}>
    {({
      loading,
      error,
      data: { quizzes },
      client,
      }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
      console.log(quizzes)
      return (
        <Wrapper>
          <button onClick={() => client.writeData({ data: { isNew: true } })}>
            New
          </button>
          <QuizList {...{ quizzes }} />
          <Query query={EDITOR_UI}>
            {({ data: { selectedQuizIdx, isNew } }) =>
              <Mutation mutation={UPDATE_QUIZ}>
                {(updateQuiz) => {
                  const quiz = isNew ? newQuiz : quizzes[selectedQuizIdx]
                  return <QuizForm {...{ quiz, updateQuiz }} />
                }
                }
              </Mutation>
          }
          </Query>
        </Wrapper>
      )
    }}
  </Query>
*/
