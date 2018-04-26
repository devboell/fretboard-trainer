import React from 'react'
import pt from 'prop-types'

import EditorButton from 'styled/EditorButton'
import Wrapper from './Wrapper'

const EditorControls = ({ onSelectNewQuiz, isNew }) =>
  <Wrapper>
    <EditorButton
      onClick={onSelectNewQuiz}
      disabled={isNew}
    >
      New
    </EditorButton>
  </Wrapper>

EditorControls.propTypes = {
  onSelectNewQuiz: pt.func.isRequired,
  isNew: pt.bool.isRequired,
}


export default EditorControls
