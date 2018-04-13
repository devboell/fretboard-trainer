import React from 'react'
import pt from 'prop-types'
import { ApolloConsumer } from 'react-apollo'

import QuizEditorPage from 'components/QuizEditorPage'
import withData from './enhancers'

const QuizEditorData = ({
  loading,
  error,
  ...other
}) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <ApolloConsumer>
      {(cache) => {
        const selectQuiz = id => cache.writeData({ data: { isNew: false, selectedQuizId: id } })
        const clearQuizSelection = isNewFlag => cache.writeData({ data: { isNew: isNewFlag, selectedQuizId: 'no_selection' } })

        return (
          <QuizEditorPage
            {...{ ...other, selectQuiz, clearQuizSelection }}
          />
      )
    }}
    </ApolloConsumer>
  )
}

QuizEditorData.propTypes = {
  loading: pt.bool.isRequired,
  error: pt.shape({}),
}

QuizEditorData.defaultProps = {
  error: undefined,
}

export default withData(QuizEditorData)
