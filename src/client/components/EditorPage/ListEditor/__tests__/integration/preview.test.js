import {
  clickListButton,
  clickPreview,
  clickClosePreview,
} from 'test-utils/enzyme-queries/listEditor'
import { getWrapper } from '../../mocks'

let wrapper

beforeAll(async () => {
  wrapper = await getWrapper()
  clickListButton(2, wrapper)
  clickPreview(wrapper)
})


describe('Preview quiz', () => {
  it('Preview component is displayed', () => {
    expect(wrapper.find('Preview').exists()).toBe(true)
  })

  it('Close preview unmounts Preview component', () => {
    clickClosePreview(wrapper)
    expect(wrapper.find('Preview').exists()).toBe(false)
  })
})
