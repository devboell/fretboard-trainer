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

export const clickNew = wrapper =>
  wrapper.find('NewButton').simulate('click')

export const clickDelete = wrapper =>
  wrapper.find('DeleteButton').simulate('click')

export const checkPanelModeId = (id, wrapper) =>
  wrapper.find('Form input[name="panelModeIds"]').at(0)
    .simulate('change', { target: { value: id, name: 'panelModeIds', checked: true } })
