import React from 'react'
import pt from 'prop-types'

import Wrapper from './Wrapper'
import ElapseBar from './ElapseBar'

const Timer = ({
  time,
  elapsedTime,
}) =>
  <Wrapper>
    <ElapseBar widthPerc={(elapsedTime / (time * 1000)) * 100} />
  </Wrapper>


Timer.propTypes = {
  time: pt.number.isRequired,
  elapsedTime: pt.number.isRequired,
}

export default Timer

