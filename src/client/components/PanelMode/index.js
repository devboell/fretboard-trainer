import React from 'react'
import pt from 'prop-types'

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
  panelMode: pt.shape({
    question: pt.string,
    answer: pt.string,
  }).isRequired,
}

export default PanelMode
