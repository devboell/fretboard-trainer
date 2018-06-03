import {
  clickListButton,
  clickDelete,
} from 'test-utils/enzyme-queries/listEditor'
import * as fxt from 'fixtures/graphql/quiz'
import { getWrapper } from '../../mocks'

let wrapper

beforeAll(async () => {
  wrapper = await getWrapper()
  clickListButton(2, wrapper)
  clickDelete(wrapper)
  await new Promise(resolve => setTimeout(resolve, 10))
  wrapper.update()
})

describe('Delete quiz', () => {
  it('UnselectedMessage is displayed', () => {
    expect(wrapper.find('UnselectedMessage').exists()).toBe(true)
  })

  it('List item was removed', () => {
    expect(wrapper.find('List li').length).toBe(fxt.quizzes.length - 1)
  })
})
