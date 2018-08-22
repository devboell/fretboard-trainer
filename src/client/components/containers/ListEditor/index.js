import React from 'react'

import ListDetail from 'components/reusable/ListDetail'
import QuizEditor from 'components/containers/QuizEditor'
import QUIZZES from 'graphql/Quizzes'


const ListEditor = () =>
  <ListDetail
    query={QUIZZES}
    name="quizzes"
    stateSlice="listEditor"
  >
    <QuizEditor />
  </ListDetail>


export default ListEditor
