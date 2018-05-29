import {
  clickListButton,
  changeName,
  formIsPristine,
  saveButtonIsDisabled,
} from 'test-utils/enzyme-queries/listEditor'

import { getWrapper } from '../../mocks'

let wrapper
const index = 2

beforeAll(async () => {
  wrapper = await getWrapper()
  clickListButton(index, wrapper)
  changeName('updated', wrapper)
})

describe('Change name input', () => {
  it('buffer is updated', () => {
    const editorProps = wrapper.find('Editor').props()

    expect(editorProps.buffer.name).toBe('updated')
  })

  it('form is dirty', () => {
    expect(formIsPristine(wrapper)).toBe(false)
  })

  it('Save is enabled', () => {
    expect(saveButtonIsDisabled(wrapper)).toBe(false)
  })
})

