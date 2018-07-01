import React from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'
import QuizList from 'components/containers/QuizList'
import QuizEditor from 'components/containers/QuizEditor'
import { initEditor } from 'components/containers/QuizEditor/reducer'
import Wrapper from './Wrapper'

const ListEditor = ({
  onInitQuiz,
}) =>
  <Wrapper>
    <QuizList
      stateSlice="listEditor"
      onSelectItem={onInitQuiz}
    />
    <QuizEditor />
  </Wrapper>

ListEditor.propTypes = {
  onInitQuiz: pt.func.isRequired,
}

ListEditor.defaultProps = {
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  onInitQuiz: q => dispatch(initEditor(q)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListEditor)
