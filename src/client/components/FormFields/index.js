import React from 'react'

import Label from './Label'
import NameInput from './NameInput'
import TypeInput from './TypeInput'
import Wrapper from './Wrapper'

const FormFields = () =>
  <Wrapper>
    <Label htmlFor="name">
      name:
      <NameInput
        name="name"
        placeholder="Enter a name"
      />
    </Label>
    <Label htmlFor="type">
      type:
      <TypeInput
        name="type"
        value="pc"
      />
    </Label>

  </Wrapper>

export default FormFields
