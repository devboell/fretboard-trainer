import React from 'react'
import pt from 'prop-types'

import PanelMode from 'components/reusable/PanelMode'
import InputCheckboxGroup from 'components/presentational/EditorPage/Form/InputCheckboxGroup'

import PanelModeWrapper from './PanelModeWrapper'
import PanelModeLabel from './PanelModeLabel'
import FieldTitle from '../FieldTitle'
import FieldInput from '../FieldInput'
import FieldWrapper from '../FieldWrapper'

const PanelModeField = ({ panelModes }) =>
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


PanelModeField.propTypes = {
  panelModes: pt.arrayOf(pt.shape({})).isRequired,
}

export default PanelModeField
