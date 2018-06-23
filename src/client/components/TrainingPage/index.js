import React from 'react'
import pt from 'prop-types'
import { compose } from 'ramda'
import { connect } from 'react-redux'
import { quizShape } from 'propShapes/quiz'
import Runner from 'components/Runner'
import { initRunner, statusMap } from 'components/Runner/reducer'
import withLoading from 'components/Loading'
import withData from './enhancers'


const TrainingPage = ({
  quizzes,
  status,
  onInitRunner,
}) =>
  <div>
    <ul>
      {quizzes.map(quiz =>
        <li key={`quiz-${quiz.id}`}>
          <button onClick={() => onInitRunner(quiz)}>
            {quiz.name}
          </button>
        </li>)
      }
    </ul>
    {!(status === statusMap.EMPTY) &&
      <Runner />
    }
  </div>


TrainingPage.propTypes = {
  quizzes: pt.arrayOf(quizShape).isRequired,
  status: pt.string,
  onInitRunner: pt.func.isRequired,
}

TrainingPage.defaultProps = {
  status: undefined,
}

const mapStateToProps = state => ({
  status: state.runner.status,
})

const mapDispatchToProps = dispatch => ({
  onInitRunner: q => dispatch(initRunner(q)),
})

export default compose(
  withData,
  connect(mapStateToProps, mapDispatchToProps),
  withLoading,
)(TrainingPage)
