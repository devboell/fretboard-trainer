import React from 'react'
import pt from 'prop-types'

import InputCheckboxGroup from 'components/EditorPage/Form/InputCheckboxGroup'
import PanelMode from 'components/PanelMode'
import FieldTitle from './FieldTitle'
import FieldInput from './FieldInput'
import Label from './Label'
import NameInput from './NameInput'
import TypeInput from './TypeInput'
import Wrapper from './Wrapper'
import FieldWrapper from './FieldWrapper'
import PanelModeWrapper from './PanelModeWrapper'
import PanelModeLabel from './PanelModeLabel'

const FormFields = ({ panelModes }) =>
  <Wrapper>
    <FieldWrapper>
      <FieldTitle>
        name:
      </FieldTitle>
      <FieldInput>
        <NameInput
          name="name"
          placeholder="Enter a name"
        />
      </FieldInput>
    </FieldWrapper>
    <FieldWrapper>
      <FieldTitle>
        type:
      </FieldTitle>
      <FieldInput>
        <Label htmlFor="type">
          pc
          <TypeInput
            name="type"
            value="pc"
          />
        </Label>
      </FieldInput>
    </FieldWrapper>
    <FieldWrapper>
      <FieldTitle>
        panel modes:
      </FieldTitle>
      <FieldInput>
        <PanelModeWrapper>
          {panelModes.map(pm =>
            <PanelModeLabel
              key={`panelMode-${pm.id}`}
              htmlFor={`panelMode-${pm.id}`}
            >
              <InputCheckboxGroup
                id={`panelMode-${pm.id}`}
                name="panelModeIds"
                value={pm.id}
              />
              <PanelMode panelMode={pm} />
            </PanelModeLabel>)
          }
        </PanelModeWrapper>
      </FieldInput>
    </FieldWrapper>
  </Wrapper>

FormFields.propTypes = {
  panelModes: pt.arrayOf(pt.shape({})).isRequired,
}

export default FormFields
