import React from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'
import { quizShape } from 'propShapes/quiz'
import QuizList from 'components/containers/QuizList'
import { initRunner } from 'components/containers/Runner/reducer'
import QuizInfo from 'components/presentational/QuizInfo'
import Wrapper from './Wrapper'
import { selectItem } from './reducer'

const ListViewer = ({
  quiz,
  runnerStatus,
  onSelectItem,
  onInitRunner,
}) =>
  <Wrapper>
    <QuizList
      selectedItem={quiz}
      {...{ onSelectItem }}
    />
    {quiz &&
      <QuizInfo {...{ quiz, runnerStatus, onInitRunner }} />
    }
  </Wrapper>

ListViewer.propTypes = {
  quiz: quizShape,
  runnerStatus: pt.string.isRequired,
  onSelectItem: pt.func.isRequired,
  onInitRunner: pt.func.isRequired,
}

ListViewer.defaultProps = {
  quiz: undefined,
}

const mapStateToProps = state => ({
  quiz: state.listViewer.list.selectedItem,
  runnerStatus: state.runner.status,
})

const mapDispatchToProps = dispatch => ({
  onSelectItem: qz => dispatch(selectItem(qz)),
  onInitRunner: qz => dispatch(initRunner(qz)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListViewer)
