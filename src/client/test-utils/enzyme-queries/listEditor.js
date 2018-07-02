import { pick } from 'ramda'


const listButton = (index, wrapper) =>
  wrapper.find('List Button').at(index)

export const pickData = pick(['id', 'name', 'type'])

export const clickListButton = (index, wrapper) =>
  listButton(index, wrapper).simulate('click')

export const listButtonIsSelected = (index, wrapper) =>
  listButton(index, wrapper).props().isSelected

export const changeName = (name, wrapper) =>
  wrapper.find('Form input[name="name"]')
    .simulate('change', { target: { value: name, name: 'name' } })

export const formIsPristine = wrapper =>
  wrapper.find('Form').props().isPristine

export const saveChanges = wrapper =>
  wrapper.find('Form').simulate('submit')

export const saveButtonIsDisabled = wrapper =>
  wrapper.find('SaveButton button').props().disabled

export const newButtonIsDisabled = wrapper =>
  wrapper.find('NewButton').props().disabled

export const previewButtonIsDisabled = wrapper =>
  wrapper.find('PreviewButton').props().disabled

export const clickNew = (typeIdx, wrapper) => {
  wrapper.find('NewButton').simulate('mouseenter')
  wrapper.find('NewButton DropDownItem').at(typeIdx).simulate('click')
}

export const clickDelete = wrapper =>
  wrapper.find('DeleteButton').simulate('click')

export const checkPanelModeId = (id, wrapper) =>
  wrapper.find('Form input[name="panelModeIds"]').at(0)
    .simulate('change', { target: { value: id, name: 'panelModeIds', checked: true } })

export const checkAllAnswers = wrapper =>
  wrapper.find('Form input[name="allAnswers"]')
    .simulate('change', { target: { value: true, name: 'allAnswers', checked: true } })

export const checkAllowIncorrect = wrapper =>
  wrapper.find('Form input[name="allowIncorrect"]')
    .simulate('change', { target: { value: true, name: 'allowIncorrect', checked: true } })

export const clickPreview = wrapper =>
  wrapper.find('PreviewButton').simulate('click')

export const clickClosePreview = wrapper =>
  wrapper.find('ExitButton').simulate('click')

