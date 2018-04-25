import React from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import quizShape from 'propShapes/quiz'

import withLoading from 'components/Loading'
import List from 'components/List'
import Editor from 'components/Editor'
import Wrapper from './Wrapper'
import withData from './enhancers'
import { selectQuiz } from './reducer'

const QuizEditor = ({
  quizzes,
  selectedQuizId,
  onSelectQuiz,
  source,
}) =>
  <Wrapper>
    <List
      items={quizzes}
      selectedItemId={selectedQuizId}
      onSelectItem={onSelectQuiz}
    />
    <Editor {...{ source }} />
  </Wrapper>

QuizEditor.propTypes = {
  quizzes: pt.arrayOf(quizShape).isRequired,
  selectedQuizId: pt.string,
  onSelectQuiz: pt.func.isRequired,
  source: quizShape,
}

QuizEditor.defaultProps = {
  selectedQuizId: undefined,
  source: undefined,
}


const mapStateToProps = state => ({
  selectedQuizId: state.editor.selectedQuizId,
  source: state.editor.source,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelectQuiz: id => dispatch(selectQuiz(ownProps.quizzes)(id)),
})


export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(QuizEditor)
