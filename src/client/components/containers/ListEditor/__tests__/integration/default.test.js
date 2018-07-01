import { previewButtonIsDisabled } from 'test-utils/enzyme-queries/listEditor'
import * as fxt from 'fixtures/graphql/quiz'
import { getWrapper } from '../../mocks'

let wrapper

beforeAll(async () => {
  wrapper = await getWrapper()
})

describe('Default, no action', () => {
  it('contains a List component', () => {
    expect(wrapper.find('List').exists()).toBe(true)
  })

  it('List contains quiz items', () => {
    expect(wrapper.find('List li').length).toBe(fxt.quizzes.length)
  })

  it('UnselectedMessage is displayed', () => {
    expect(wrapper.find('UnselectedMessage').exists()).toBe(true)
  })

  it('Preview button is disabled', () => {
    expect(previewButtonIsDisabled(wrapper)).toBe(true)
  })
})
