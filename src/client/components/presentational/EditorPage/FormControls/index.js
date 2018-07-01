import React from 'react'

import Wrapper from './Wrapper'

import StyledSaveButton from './StyledSaveButton'
import StyledDeleteButton from './StyledDeleteButton'

const FormControls = () =>
  <Wrapper>
    <StyledSaveButton>
      Save
    </StyledSaveButton>
    <StyledDeleteButton>
      Delete
    </StyledDeleteButton>
  </Wrapper>


export default FormControls
