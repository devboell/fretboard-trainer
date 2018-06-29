import React from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'
import { quizShape } from 'propShapes/quiz'
import QuizList from 'components/QuizList'
import { initRunner } from 'components/Runner/reducer'
import QuizView from './QuizView'
import Wrapper from './Wrapper'
import { selectItem } from './reducer'

const ListView = ({ quiz, onSelectItem, onInitRunner }) =>
  <Wrapper>
    <QuizList
      selectedItem={quiz}
      {...{ onSelectItem, onInitRunner }}
    />
    {quiz &&
      <QuizView {...{ quiz }} />
    }
  </Wrapper>

ListView.propTypes = {
  quiz: quizShape,
  onSelectItem: pt.func.isRequired,
  onInitRunner: pt.func.isRequired,
}

ListView.defaultProps = {
  quiz: undefined,
}

const mapStateToProps = state => ({
  quiz: state.listView.list.selectedItem,
})

const mapDispatchToProps = dispatch => ({
  onSelectItem: qz => dispatch(selectItem(qz)),
  onInitRunner: qz => dispatch(initRunner(qz)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListView)
