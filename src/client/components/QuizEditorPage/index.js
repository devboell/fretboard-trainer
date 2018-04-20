import React from 'react'
import pt from 'prop-types'
// import { isEmpty } from 'ramda'

import quizShape from 'propShapes/quiz'
import List from 'components/List'
import QuizEditor from 'components/QuizEditor'
import QuizView from 'components/QuizView'
import Wrapper from './Wrapper'
import ListEditorWrapper from './ListEditorWrapper'
import QuizViewWrapper from './QuizViewWrapper'


const QuizEditorPage = ({
  quizzes,
  selectedQuizId,
  isNew,
  editedQuiz,
  selectedQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  onSelectQuiz,
  onSelectNewQuiz,
  onDeselectQuiz,
  onUpdateEditedQuiz,
}) =>
  <Wrapper>
    <ListEditorWrapper>
      <List
        items={quizzes}
        selectedItemId={selectedQuizId}
        onSelectItem={onSelectQuiz}
      />
      <QuizEditor
        {...{
          selectedQuiz,
          editedQuiz,
          isNew,
          onSelectQuiz,
          onSelectNewQuiz,
          onDeselectQuiz,
          onUpdateEditedQuiz,
        }}
        onCreateQuiz={createQuiz}
        onUpdateQuiz={updateQuiz}
        onDeleteQuiz={deleteQuiz}
      />
    </ListEditorWrapper>
    {editedQuiz &&
      <QuizViewWrapper>
        <QuizView quiz={editedQuiz} />
      </QuizViewWrapper>
    }
  </Wrapper>


QuizEditorPage.propTypes = {
  quizzes: pt.arrayOf(quizShape).isRequired,
  selectedQuizId: pt.string.isRequired,
  isNew: pt.bool.isRequired,
  selectedQuiz: quizShape,
  editedQuiz: quizShape,
  createQuiz: pt.func.isRequired,
  updateQuiz: pt.func.isRequired,
  deleteQuiz: pt.func.isRequired,
  onSelectQuiz: pt.func.isRequired,
  onSelectNewQuiz: pt.func.isRequired,
  onDeselectQuiz: pt.func.isRequired,
  onUpdateEditedQuiz: pt.func.isRequired,
}

QuizEditorPage.defaultProps = {
  editedQuiz: undefined,
  selectedQuiz: undefined,
}

export default QuizEditorPage
