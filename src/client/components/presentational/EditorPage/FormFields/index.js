import React from 'react'
import pt from 'prop-types'


import NameField from './NameField'
import TypeField from './TypeField'
import DescriptionField from './DescriptionField'
import PanelModeField from './PanelModeField'
import AllAnswersField from './AllAnswersField'
import AllowIncorrectField from './AllowIncorrectField'
import TimerField from './TimerField'
import ShowNotesField from './ShowNotesField'

import Wrapper from './Wrapper'

const FormFields = ({ panelModes }) =>
  <Wrapper>
    <NameField />
    <TypeField />
    <DescriptionField />
    <PanelModeField panelModes={panelModes} />
    <AllAnswersField />
    <AllowIncorrectField />
    <TimerField />
    <ShowNotesField />
  </Wrapper>

FormFields.propTypes = {
  panelModes: pt.arrayOf(pt.shape({})).isRequired,
}

export default FormFields
