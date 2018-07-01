import {
  clickListButton,
  changeName,
  checkPanelModeId,
  saveChanges,
  formIsPristine,
} from 'test-utils/enzyme-queries/listEditor'
import { getWrapper } from '../../mocks'

let wrapper
const index = 2

beforeAll(async () => {
  wrapper = await getWrapper()
  clickListButton(index, wrapper)
  changeName('updated', wrapper)
  checkPanelModeId('2', wrapper)
  checkPanelModeId('3', wrapper)
  saveChanges(wrapper)
  await new Promise(resolve => setTimeout(resolve, 10))

  wrapper.update()
})

describe('Update quiz', () => {
  it('original is updated', () => {
    const editorProps = wrapper.find('Editor').props()
    expect(editorProps.original.name).toBe('updated')
  })

  it('form is pristine', () => {
    expect(formIsPristine(wrapper)).toBe(true)
  })
})
