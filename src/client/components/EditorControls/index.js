import React from 'react'
import pt from 'prop-types'

import NewButton from './NewButton'
import Wrapper from './Wrapper'

const EditorControls = ({ onSelectNewQuiz, isNew }) =>
  <Wrapper>
    <NewButton
      onClick={onSelectNewQuiz}
      disabled={isNew}
    >
      New
    </NewButton>
  </Wrapper>

EditorControls.propTypes = {
  onSelectNewQuiz: pt.func.isRequired,
  isNew: pt.bool.isRequired,
}


export default EditorControls
