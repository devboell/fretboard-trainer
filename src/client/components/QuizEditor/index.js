import React from 'react'
import pt from 'prop-types'

import { compose } from 'ramda'
import quizShape from 'propShapes/quiz'

import withLoading from 'components/Loading'
import List from 'components/List'
import withData from './enhancers'

const QuizEditor = ({ quizzes }) =>
  <List
    items={quizzes}
    selectedItemId="0"
    onSelectItem={() => null}
  />

QuizEditor.propTypes = {
  quizzes: pt.arrayOf(quizShape).isRequired,
}

export default compose(
  withData,
  withLoading,
)(QuizEditor)
