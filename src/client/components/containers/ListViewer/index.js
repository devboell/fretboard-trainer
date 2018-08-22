import React from 'react'

import QuizInfo from 'components/containers/QuizInfo'
import ListDetail from 'components/reusable/ListDetail'
import QUIZZES from 'graphql/Quizzes'


const ListViewer = () =>
  <ListDetail
    query={QUIZZES}
    name="quizzes"
    stateSlice="listViewer"
  >
    <QuizInfo />
  </ListDetail>


export default ListViewer
