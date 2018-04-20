import React from 'react'
import pt from 'prop-types'
import { isNil } from 'ramda'

import quizShape from 'propShapes/quiz'
import QuizForm from 'components/QuizForm'
import EditorButton from 'styled/EditorButton'
import Wrapper from './Wrapper'
import CreateWrapper from './CreateWrapper'
import FormWrapper from './FormWrapper'
import NoSelectionWrapper from './NoSelectionWrapper'


const QuizEditor = ({
  selectedQuiz,
  editedQuiz,
  isNew,
  onSelectQuiz,
  onSelectNewQuiz,
  onDeselectQuiz,
  onCreateQuiz,
  onUpdateQuiz,
  onDeleteQuiz,
  onUpdateEditedQuiz,
}) =>
  <Wrapper>
    <CreateWrapper>
      <EditorButton
        onClick={onSelectNewQuiz}
        disabled={isNew}
      >
        New
      </EditorButton>
    </CreateWrapper>
    <FormWrapper>
      {!isNil(editedQuiz)
        ? <QuizForm {...{
            selectedQuiz,
            editedQuiz,
            isNew,
            onSelectQuiz,
            onDeselectQuiz,
            onCreateQuiz,
            onUpdateQuiz,
            onDeleteQuiz,
            onUpdateEditedQuiz,
          }}
        />
        : <NoSelectionWrapper>Select or Create a Quiz</NoSelectionWrapper>
      }
    </FormWrapper>
  </Wrapper>

QuizEditor.propTypes = {
  selectedQuiz: quizShape,
  editedQuiz: quizShape,
  isNew: pt.bool.isRequired,
  onSelectQuiz: pt.func.isRequired,
  onSelectNewQuiz: pt.func.isRequired,
  onDeselectQuiz: pt.func.isRequired,
  onCreateQuiz: pt.func.isRequired,
  onUpdateQuiz: pt.func.isRequired,
  onDeleteQuiz: pt.func.isRequired,
  onUpdateEditedQuiz: pt.func.isRequired,
}

QuizEditor.defaultProps = {
  editedQuiz: undefined,
  selectedQuiz: undefined,
}

export default QuizEditor
