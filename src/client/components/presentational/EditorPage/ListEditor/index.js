import React from 'react'
import pt from 'prop-types'
import { connect } from 'react-redux'
import { stopQuiz } from 'components/containers/Runner'

import Preview from 'components/presentational/EditorPage/Preview'
import QuizList from 'components/containers/QuizList'

import { togglePreview } from './EditorContainer/reducer'
import Wrapper from './Wrapper'
import ListEditorWrapper from './ListEditorWrapper'
import EditorContainer from './EditorContainer'


const ListEditor = ({ showPreview, onClosePreview }) =>
  <Wrapper>
    {showPreview
      ? <Preview {...{ onClosePreview }} />
      :
      <ListEditorWrapper>
        <QuizList />
        <EditorContainer />
      </ListEditorWrapper>
    }
  </Wrapper>

ListEditor.propTypes = {
  showPreview: pt.bool.isRequired,
  onClosePreview: pt.func.isRequired,
}

const mapStateToProps = state => ({
  showPreview: state.editor.showPreview,
})

const closePreview = (dispatch) => {
  dispatch(stopQuiz())
  dispatch(togglePreview())
}

const mapDispatchToProps = dispatch => ({
  onClosePreview: () => closePreview(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListEditor)
