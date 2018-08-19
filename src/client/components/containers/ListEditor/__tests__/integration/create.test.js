import {
  clickNew,
  changeName,
  changeDescription,
  checkPanelModeId,
  checkAllAnswers,
  checkAllowIncorrect,
  saveChanges,
  listButtonIsSelected,
  formIsPristine,
} from 'test-utils/enzyme-queries/listEditor'

import { getWrapper } from '../../mocks'

let wrapper


describe('Create pc quiz', () => {
  beforeAll(async () => {
    wrapper = await getWrapper()
    clickNew(0, wrapper)
    changeName('new', wrapper)
    changeDescription('no description', wrapper)
    checkPanelModeId('2', wrapper)
    checkAllAnswers(wrapper)
    checkAllowIncorrect(wrapper)
    saveChanges(wrapper)
    await new Promise(resolve => setTimeout(resolve, 10))
    wrapper.update()
  })
  it('List contains and selects new item', () => {
    expect(listButtonIsSelected(6, wrapper)).toBe(true)
  })

  it('form is pristine', () => {
    expect(formIsPristine(wrapper)).toBe(true)
  })
})
