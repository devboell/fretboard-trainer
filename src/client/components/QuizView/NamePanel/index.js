import React from 'react'
import pt from 'prop-types'

import Wrapper from './Wrapper'

const NamePanel = ({ entity }) =>
  <Wrapper>
    {entity.name}
  </Wrapper>

NamePanel.propTypes = {
  entity: pt.shape({}).isRequired,
}

export default NamePanel
