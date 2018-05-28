import { all, equals } from 'ramda'

export const clickStart = wrapper =>
  wrapper.find('StartButton').simulate('click')

export const panelModes = wrapper =>
  wrapper.find('PanelMode')

export const selectPanelMode = (idx, wrapper) =>
  wrapper.find('PanelModeButton').at(idx).simulate('click')

export const questionPanel = wrapper =>
  wrapper.find('PanelWrapper').at(0)

export const answerPanel = wrapper =>
  wrapper.find('PanelWrapper').at(1)

export const questionPanelContains = (name, wrapper) =>
  questionPanel(wrapper).find(name).exists()

export const answerPanelContains = (name, wrapper) =>
  answerPanel(wrapper).find(name).exists()

export const choices = wrapper =>
  wrapper.find('MultipleChoice Choice')

export const clickChoice = (idx, wrapper) =>
  choices(wrapper).at(idx).find('Button').simulate('click')

export const choiceStatus = (idx, wrapper) =>
  choices(wrapper).at(idx).find('ChoiceStatus').props().status

export const choicesContain = (name, wrapper) => {
  const result = choices(wrapper).map(choice => choice.find(name).exists())
  return all(equals(true), result)
}
