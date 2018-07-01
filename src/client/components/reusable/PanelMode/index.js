import React from 'react'
import { panelModeShape } from 'propShapes/quiz'
import Wrapper from './Wrapper'

const PanelMode = ({ panelMode }) =>
  <Wrapper>
    <p>
      {panelMode.question}
    </p>
    <hr />
    <p>
      {panelMode.answer}
    </p>
  </Wrapper>

PanelMode.propTypes = {
  panelMode: panelModeShape.isRequired,
}

export default PanelMode
