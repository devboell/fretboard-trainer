import React from 'react'
import pt from 'prop-types'
import { equals } from 'ramda'
import quizShape from 'propShapes/quiz'

import Form from 'components/Form'

const Editor = ({
  original,
  buffer,
  onUpdateBuffer,
}) =>
  <Form
    {...{
      buffer,
      onUpdateBuffer,
      }}
    isPristine={equals(original, buffer)}
  />

Editor.propTypes = {
  original: quizShape.isRequired,
  buffer: quizShape.isRequired,
  onUpdateBuffer: pt.func.isRequired,
}

export default Editor
