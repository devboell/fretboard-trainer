import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const NamePanel = ({ entity }) =>
  <Wrapper>
    {entity}
  </Wrapper>

NamePanel.propTypes = {
  entity: PropTypes.string.isRequired,
}

export default NamePanel
