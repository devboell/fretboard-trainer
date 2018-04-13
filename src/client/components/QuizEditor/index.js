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
  quiz,
  isNew,
  clearQuizSelection,
  onCreateQuiz,
  onUpdateQuiz,
  onDeleteQuiz,
}) =>
  <Wrapper>
    <CreateWrapper>
      <EditorButton
        onClick={() => clearQuizSelection(true)}
        disabled={isNew}
      >
        New
      </EditorButton>
    </CreateWrapper>
    <FormWrapper>
      {!isNil(quiz)
        ? <QuizForm {...{
            quiz,
            isNew,
            clearQuizSelection,
            onCreateQuiz,
            onUpdateQuiz,
            onDeleteQuiz,
          }}
        />
        : <NoSelectionWrapper>Select or Create a Quiz</NoSelectionWrapper>
      }
    </FormWrapper>
  </Wrapper>

QuizEditor.propTypes = {
  quiz: quizShape,
  isNew: pt.bool.isRequired,
  clearQuizSelection: pt.func.isRequired,
  onCreateQuiz: pt.func.isRequired,
  onUpdateQuiz: pt.func.isRequired,
  onDeleteQuiz: pt.func.isRequired,
}

QuizEditor.defaultProps = {
  quiz: undefined,
}

export default QuizEditor
