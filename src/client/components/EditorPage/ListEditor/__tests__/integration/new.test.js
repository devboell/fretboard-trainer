import { clickNew, newButtonIsDisabled } from 'test-utils/enzyme-queries/listEditor'

import { getWrapper } from '../../mocks'

let wrapper

beforeAll(async () => {
  wrapper = await getWrapper()
  clickNew(0, wrapper)
})

describe('Select new quiz', () => {
  it('List selectedQuizid is undefined', () => {
    expect(wrapper.find('List').props().selectedQuizId).toBeUndefined()
  })

  it('New button is disabled', () => {
    expect(newButtonIsDisabled(wrapper)).toBe(true)
  })
})

