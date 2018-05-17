import React from 'react'
import pt from 'prop-types'

import InputCheckboxGroup from 'components/Form/InputCheckboxGroup'
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
      <Label
        key={`panelMode-${pm.id}`}
        htmlFor={`panelMode-${pm.id}`}
      >
        <InputCheckboxGroup
          id={`panelMode-${pm.id}`}
          name="panelModeIds"
          value={pm.id}
        />
        {pm.question} - {pm.answer}
      </Label>)
    }
  </Wrapper>

FormFields.propTypes = {
  panelModes: pt.arrayOf(pt.shape({})).isRequired,
}

export default FormFields
