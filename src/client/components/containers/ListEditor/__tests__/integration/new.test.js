import { clickNew, newButtonIsDisabled, clickListButton } from 'test-utils/enzyme-queries/listEditor'

import { getWrapper } from '../../mocks'

let wrapper


describe('Select new quiz', () => {
  beforeAll(async () => {
    wrapper = await getWrapper()
    clickNew(0, wrapper)
  })

  it('List selectedItemId is 0', () => {
    expect(wrapper.find('List').props().selectedItemId).toBe('no_selection')
  })

  it('New button is disabled', () => {
    expect(newButtonIsDisabled(wrapper)).toBe(true)
  })
})

describe('Select new quiz, while other quiz is selected', () => {
  beforeAll(async () => {
    wrapper = await getWrapper()
    clickListButton(0, wrapper)
    clickNew(0, wrapper)
  })

  it('List selectedItemId is 0', () => {
    expect(wrapper.find('List').props().selectedItemId).toBe('no_selection')
  })

  it('New button is disabled', () => {
    expect(newButtonIsDisabled(wrapper)).toBe(true)
  })
})

