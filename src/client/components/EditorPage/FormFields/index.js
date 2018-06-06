import React from 'react'
import pt from 'prop-types'


import NameField from './NameField'
import TypeField from './TypeField'
import PanelModeField from './PanelModeField'

import Wrapper from './Wrapper'

const FormFields = ({ panelModes }) =>
  <Wrapper>
    <NameField />
    <TypeField />
    <PanelModeField panelModes={panelModes} />
  </Wrapper>

FormFields.propTypes = {
  panelModes: pt.arrayOf(pt.shape({})).isRequired,
}

export default FormFields
