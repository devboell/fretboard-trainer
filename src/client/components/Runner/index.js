import React from 'react'

import { connect } from 'react-redux'
import quizShape from 'propShapes/quiz'

const Runner = ({ quiz }) =>
  <div><h5>Runner</h5><p>{quiz.name}</p></div>

Runner.propTypes = {
  quiz: quizShape.isRequired,
}


const mapStateToProps = state => ({
  quiz: state.runner.quiz,
})

export default connect(mapStateToProps)(Runner)
