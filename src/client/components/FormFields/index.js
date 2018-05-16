import React from 'react'
import pt from 'prop-types'

import Label from './Label'
import NameInput from './NameInput'
import TypeInput from './TypeInput'
import Wrapper from './Wrapper'

const FormFields = ({ panelModes }) =>
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
    {panelModes.map(pm =>
      <div key={`pm=${pm.id}`}>{pm.question}</div>)
    }

  </Wrapper>

FormFields.propTypes = {
  panelModes: pt.arrayOf(pt.shape({})).isRequired,
}

export default FormFields
