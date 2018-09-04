import React from 'react'
import pt from 'prop-types'
import { filter, contains } from 'ramda'

import { pcPanelModeIds } from 'components/containers/QuizEditor/constants'

import Wrapper from './Wrapper'

import NameField from './NameField'
import TypeField from './TypeField'
import DescriptionField from './DescriptionField'
import PanelModeField from './PanelModeField'
import AllAnswersField from './AllAnswersField'
import AllowIncorrectField from './AllowIncorrectField'
import TimerField from './TimerField'
import ShowNotesField from './ShowNotesField'
import HighlightOctavesField from './HighlightOctavesField'


const panelModesForType = (type, panelModes) => (
  type === 'pc'
    ? filter(pm => contains(pm.id, pcPanelModeIds), panelModes)
    : panelModes)

const fieldsByType = {
  pc: [],
  pitch: [
    <HighlightOctavesField key="highlightOctavesField" />,
  ],
  interval: [],
}

const fields = (panelModes, type) => [
  <NameField key="nameField" />,
  <TypeField key="typeField" />,
  <DescriptionField key="descriptionField" />,
  <PanelModeField
    key="panelField"
    panelModes={panelModesForType(type, panelModes)}
  />,
  <AllAnswersField key="allAnswersField" />,
  <AllowIncorrectField key="allowIncorrectField" />,
  <TimerField key="timerField" />,
  <ShowNotesField key="showNotesField" />,
  ...fieldsByType[type],
]

const FormFields = ({ panelModes, quizType }) =>
  <Wrapper>
    {fields(panelModes, quizType)}
  </Wrapper>

FormFields.propTypes = {
  panelModes: pt.arrayOf(pt.shape({})).isRequired,
  quizType: pt.string.isRequired,
}

export default FormFields
