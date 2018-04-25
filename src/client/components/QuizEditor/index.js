import React from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import quizShape from 'propShapes/quiz'

import withLoading from 'components/Loading'
import List from 'components/List'
import withData from './enhancers'
import { selectQuiz } from './reducer'

const QuizEditor = ({
  quizzes,
  selectedQuizId,
  onSelectQuiz,
}) =>
  <List
    items={quizzes}
    selectedItemId={selectedQuizId}
    onSelectItem={onSelectQuiz}
  />

QuizEditor.propTypes = {
  quizzes: pt.arrayOf(quizShape).isRequired,
  selectedQuizId: pt.string,
  onSelectQuiz: pt.func.isRequired,
}

QuizEditor.defaultProps = {
  selectedQuizId: undefined,
}


const mapStateToProps = state => ({
  selectedQuizId: state.editor.selectedQuizId,
})

const mapDispatchToProps = dispatch => ({
  onSelectQuiz: id => dispatch(selectQuiz(id)),
})


export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(QuizEditor)
