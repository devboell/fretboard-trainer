import React from 'react'
import pt from 'prop-types'

import PanelMode from 'components/reusable/PanelMode'
import InputCheckboxGroup from 'components/presentational/EditorPage/Form/InputCheckboxGroup'
import FieldWrapper from 'components/reusable/FieldWrapper'

import PanelModeWrapper from './PanelModeWrapper'
import PanelModeLabel from './PanelModeLabel'

const PanelModeField = ({ panelModes }) =>
  <FieldWrapper label="panel modes">
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
  </FieldWrapper>


PanelModeField.propTypes = {
  panelModes: pt.arrayOf(pt.shape({})).isRequired,
}

export default PanelModeField
