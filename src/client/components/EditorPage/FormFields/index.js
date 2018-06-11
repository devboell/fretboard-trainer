import React from 'react'
import pt from 'prop-types'


import NameField from './NameField'
import TypeField from './TypeField'
import PanelModeField from './PanelModeField'
import AllAnswersField from './AllAnswersField'
import AllowIncorrectField from './AllowIncorrectField'

import Wrapper from './Wrapper'

const FormFields = ({ panelModes }) =>
  <Wrapper>
    <NameField />
    <TypeField />
    <PanelModeField panelModes={panelModes} />
    <AllAnswersField />
    <AllowIncorrectField />
  </Wrapper>

FormFields.propTypes = {
  panelModes: pt.arrayOf(pt.shape({})).isRequired,
}

export default FormFields
