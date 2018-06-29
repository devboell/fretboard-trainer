import React from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'
import { quizShape } from 'propShapes/quiz'
import QuizList from 'components/QuizList'
import QuizView from './QuizView'
import { selectItem } from './reducer'

const ListView = ({ quiz, onSelectItem }) =>
  <div>
    <QuizList
      selectedItem={quiz}
      {...{ onSelectItem }}
    />
    {quiz &&
      <QuizView {...{ quiz }} />
    }
  </div>

ListView.propTypes = {
  quiz: quizShape,
  onSelectItem: pt.func.isRequired,
}

ListView.defaultProps = {
  quiz: undefined,
}

const mapStateToProps = state => ({
  quiz: state.listView.list.selectedItem,
})

const mapDispatchToProps = dispatch => ({
  onSelectItem: qz => dispatch(selectItem(qz)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListView)
