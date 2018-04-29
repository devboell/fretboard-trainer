import React from 'react'
import pt from 'prop-types'
import { equals } from 'ramda'
import quizShape from 'propShapes/quiz'
import { modes } from 'components/QuizEditor/reducer'

import Form from 'components/Form'

const Editor = ({
  mode,
  original,
  buffer,
  onUpdateBuffer,
  onCreate,
  onUpdate,
  onDelete,
}) =>
  <Form
    {...{
      buffer,
      onUpdateBuffer,
      onCreate,
      onUpdate,
      onDelete,
      }}
    isNew={mode === modes.NEW}
    isPristine={equals(original, buffer)}
  />

Editor.propTypes = {
  mode: pt.string.isRequired,
  original: quizShape.isRequired,
  buffer: quizShape.isRequired,
  onUpdateBuffer: pt.func.isRequired,
  onCreate: pt.func.isRequired,
  onUpdate: pt.func.isRequired,
  onDelete: pt.func.isRequired,
}

export default Editor
