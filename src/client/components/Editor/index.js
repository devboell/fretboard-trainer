import React from 'react'
import quizShape from 'propShapes/quiz'


const Editor = ({ original, buffer }) =>
  <div>{original.name}</div>

Editor.propTypes = {
  original: quizShape.isRequired,
  buffer: quizShape.isRequired,
}

export default Editor
