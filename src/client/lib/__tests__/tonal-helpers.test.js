import { fromChroma } from '../tonal-helpers'

it('fromChroma', () => {
  expect(fromChroma(0)).toBe('C')
  expect(fromChroma(1, false)).toBe('Db')
  expect(fromChroma(1, true)).toBe('C#')
})
