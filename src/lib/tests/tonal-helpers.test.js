import { transpose } from '../tonal-helpers'

it('should transpose by semitones', () => {
  expect(transpose('E2')(5)).toBe('A2')
})
