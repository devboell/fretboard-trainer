import React from 'react'

import StyledModal from './StyledModal'

export default Component =>
  () =>
    <StyledModal isOpen>
      <Component />
    </StyledModal>
