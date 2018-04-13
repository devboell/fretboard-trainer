import React from 'react'
import pt from 'prop-types'
import { isEmpty } from 'ramda'

import List from 'components/List'
import QuizEditor from 'components/QuizEditor'
import Wrapper from './Wrapper'

const newQuiz = {
  id: undefined,
  name: '',
  __typename: 'Quiz',
}

const QuizEditorPage = ({
  quizzes,
  selectedQuizId,
  isNew,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  selectQuiz,
  clearQuizSelection,
}) => {
  const selectedQuiz = selectedQuizId === 'no_selection' || isEmpty(quizzes)
    ? undefined
    : quizzes.filter(q => q.id === selectedQuizId)[0]
  const quiz = isNew ? newQuiz : selectedQuiz

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
}

QuizEditorPage.propTypes = {
  quizzes: pt.arrayOf(pt.shape({})).isRequired,
  selectedQuizId: pt.string.isRequired,
  isNew: pt.bool.isRequired,
  createQuiz: pt.func.isRequired,
  updateQuiz: pt.func.isRequired,
  deleteQuiz: pt.func.isRequired,
  selectQuiz: pt.func.isRequired,
  clearQuizSelection: pt.func.isRequired,
}

export default QuizEditorPage
