import { times, sum } from 'ramda'
import {
  fretWidth,
  fretOffset,
  stringCenter,
} from '../fretboard'

it('should check that all fret width percentages add up to 100', () => {
  const nrOfFrets = 12
  const totalWidth = 100

  const received = sum(times(fretWidth(nrOfFrets), nrOfFrets))
  expect(Math.round(received)).toBe(totalWidth)
})

it('should return correct fret offset', () => {
  const nrOfFrets = 12
  const position = 5
  const expected = 50

  const received = fretOffset(nrOfFrets)(position)
  expect(Math.round(received)).toBe(expected)
})

it('should return correct string center', () => {
  const nrOfStrings = 6
  const str = 5
  const expected = 92

  const received = stringCenter(nrOfStrings)(str)
  expect(Math.round(received)).toBe(expected)
})
