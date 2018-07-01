import {
  clickListButton,
  listButtonIsSelected,
  previewButtonIsDisabled,
  pickData,
  formIsPristine,
  saveButtonIsDisabled,
} from 'test-utils/enzyme-queries/listEditor'
import * as fxt from 'fixtures/graphql/quiz'
import { getWrapper } from '../../mocks'

let wrapper
const index = 2
const selectedQuiz = fxt.quizzes[index]

beforeAll(async () => {
  wrapper = await getWrapper()
  clickListButton(index, wrapper)
})

describe('Select list item', () => {
  it('selects an item in List', () => {
    expect(listButtonIsSelected(index, wrapper)).toBe(true)
  })

  it('sets the buffer in Editor', () => {
    const editorProps = wrapper.find('Editor').props()
    expect(pickData(editorProps.buffer)).toEqual(pickData(selectedQuiz))
  })

  it('form is pristine', () => {
    expect(formIsPristine(wrapper)).toBe(true)
  })

  it('Save is disabled', () => {
    expect(saveButtonIsDisabled(wrapper)).toBe(true)
  })

  it('Preview button is enabled', () => {
    expect(previewButtonIsDisabled(wrapper)).toBe(false)
  })
})
