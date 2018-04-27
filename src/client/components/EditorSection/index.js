import React from 'react'
import pt from 'prop-types'

import quizShape from 'propShapes/quiz'
import Editor from 'components/Editor'
import EditorControls from 'components/EditorControls'
import { modes } from 'components/QuizEditor/reducer'
import UnselectedMessage from './UnselectedMessage'
import Wrapper from './Wrapper'

const EditorSection = ({
  mode,
  original,
  buffer,
  onUpdateBuffer,
  onSelectNewQuiz,
  onCreate,
  onUpdate,
}) =>
  <Wrapper>
    <EditorControls
      onSelectNewQuiz={onSelectNewQuiz}
      isNew={mode === modes.NEW}
    />
    {mode === modes.UNSELECTED
      ? <UnselectedMessage />
      : <Editor
        {...{
          mode,
          original,
          buffer,
          onUpdateBuffer,
          onCreate,
          onUpdate,
        }}
      />
    }
  </Wrapper>

EditorSection.propTypes = {
  mode: pt.string.isRequired,
  original: quizShape,
  buffer: quizShape,
  onUpdateBuffer: pt.func.isRequired,
  onSelectNewQuiz: pt.func.isRequired,
  onCreate: pt.func.isRequired,
  onUpdate: pt.func.isRequired,
}

EditorSection.defaultProps = {
  original: undefined,
  buffer: undefined,
}


export default EditorSection
