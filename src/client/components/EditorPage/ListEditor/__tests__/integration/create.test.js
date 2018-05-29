import {
  clickNew,
  changeName,
  checkPanelModeId,
  saveChanges,
  listButtonIsSelected,
  formIsPristine,
} from 'test-utils/enzyme-queries/listEditor'

import { getWrapper } from '../../mocks'

let wrapper

beforeAll(async () => {
  wrapper = await getWrapper()
  clickNew(wrapper)
  changeName('new', wrapper)
  checkPanelModeId('2', wrapper)
  saveChanges(wrapper)
  await new Promise(resolve => setTimeout(resolve))
  wrapper.update()
})

describe('Create quiz', () => {
  it('List contains and selects new item', () => {
    expect(listButtonIsSelected(6, wrapper)).toBe(true)
  })

  it('form is pristine', () => {
    expect(formIsPristine(wrapper)).toBe(true)
  })
})
